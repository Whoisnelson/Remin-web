"use client";

import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, useGSAP);

interface TextCycleProps {
  words: string[];
  className: string;
}

const TextCycle = ({ words, className }: TextCycleProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const text = container.current;

    if (!text) return;

    let index = 0;

    const animate = () => {
      text.textContent = words[index];

      const split = SplitText.create(text, {
        type: "lines",
      });

      const tl = gsap.timeline({
        onComplete: () => {
          split.revert();

          index = (index + 1) % words.length;

          animate();
        },
      });

      tl.from(split.lines, {
        y: 80,
        opacity: 0,
        // stagger: 0.05,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
      })
        .to({}, { duration: 1, delay: 3, stagger: 0.05,}) // Pause
        .to(split.lines, {
          y: -80,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.in",
        });
    };

    animate();
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={container}
        className={className}
      />
    </div>
  );
};

export default TextCycle;