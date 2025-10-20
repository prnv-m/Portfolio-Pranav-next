"use client";

import React, { useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

// Define the props for the component
interface CopyProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

// Create the main component
export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Reset refs
      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements: HTMLElement[] = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(
          containerRef.current.children
        ) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }
      elementRef.current = elements;

      // Split text into lines
      elements.forEach((element) => {
        const split = SplitText.create(element, {
          type: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);

        // Handle text indent
        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;
        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }

        lines.current.push(...(split.lines as HTMLElement[]));
      });

      // Hide lines initially
      gsap.set(lines.current, { y: "100%" });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      // Cleanup
      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );
  
  const parentStyle: React.CSSProperties = {
    overflow: 'hidden',
  }

  // If there's only one child, clone it and add the ref
  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    const childProps = children.props as { style?: React.CSSProperties };

    const propsToMerge = {
      ref: containerRef,
      style: {
        ...(childProps.style || {}), // Safely access and spread the original style
        ...parentStyle,
      },
    };
    
    // 3. Let React.cloneElement handle merging the original props with our new ones.
    return React.cloneElement(children, propsToMerge);
  }

  // Otherwise, wrap children in a div
  return (
    <div ref={containerRef} data-copy-wrapper="true" style={parentStyle}>
      {children}
    </div>
  );
}