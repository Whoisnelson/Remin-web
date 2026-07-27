"use client";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ReactNode } from "react";

interface LightningAnimProps {
  children: ReactNode;
  useScrollTrigger?: boolean;
}

gsap.registerPlugin(SplitText, ScrollTrigger);
const LightningAnim = ({children, useScrollTrigger = false}: LightningAnimProps) => {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(()=>{
        if(!textRef.current) return;
        const ctx = gsap.context(()=>{
            const split = new SplitText(textRef.current, {type: "chars, words"})
            const playAnimation = () => {
                split.chars.forEach((char, index)=>{
                    const element = char as HTMLElement;
                    element.classList.remove("text-fade-char");
                    void element.offsetHeight
                    element.style.animationDelay = `${index * 0.04}s`;
                    element.classList.add("text-fade-char");
                })
                const element = textRef.current;
                if (!element) return;
                element.classList.remove("text-blink");
                void element.offsetHeight
                element.classList.add("text-blink");
            }
            const repeatLightning = () => {
                playAnimation();
                gsap.delayedCall(
                    gsap.utils.random(3,7),
                    repeatLightning
                );
            }
            if(useScrollTrigger) {
                ScrollTrigger.create({
                    trigger: textRef.current,
                    start: "top 80%",
                    onEnter: repeatLightning,
                    scrub: true
                    
                })
            } else {
                repeatLightning();
            }
        }, textRef)
        return ()=> {
            ctx.revert();
        }
    }, [useScrollTrigger])
    return (
        <>
        <style jsx global>{`
        :root {
            --lightning-color: #2b6bbb;
        }
        @keyframes text-fade-in {
            0% {
                color: inherit;
                opacity: 1;
            }
            1% {
                color: var(--lightning-color);
                opacity: 1;
            }
            15% {
                opacity: 0.2;
            }
            30% {
                opacity: 0.8;
            }
            40% {
                color: var(--lightning-color);
                opacity: 1;
            }
            55% {
                opacity: 1;
            }
            70% {
                color: inherit;
                opacity: 0.5;
            }
            85% {
                opacity: 1;
            }
            to {
                opacity: 1
            }
        }

        @keyframes blink {
        0% {
        opacity: 1;
        }
        20% {
            opacity: 0.3;
        }
        35% {
            opacity: 0.85;
        }
        55% {
        opacity: 0.2;
        }
        70% {
            opacity: 1;
        }
        to {
        opacity: 1;
        }
        }
            .text-fade-char {
            animation: text-fade-in .4s ease-out forwards;
            }

            .text-blink {
            animation: blink 0.6s ease-out;
            }

        `}
        </style>
        <span ref={textRef}>{children}</span>
        </>
    )
}

export default LightningAnim;