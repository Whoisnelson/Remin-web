"use client"

import LightningAnim from "@/app/providers/lightningAnim";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function Finally() {
    const reminRef = useRef<HTMLDivElement>(null);
    const isceRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scrollRef.current,
      start: "top 90%",
      scrub: true
    },
  });

      const cc = gsap.timeline({
    scrollTrigger: {
      trigger: scrollRef.current,
      start: "top 80%",
      scrub: true
    },
  });

  gsap.set(subtitleRef.current, {
    y: 60,
    opacity: 0,
  })

  // Start off-screen
  gsap.set(reminRef.current, {
    x: -400,
    rotateY: -70,
    opacity: 0
  });

  gsap.set(isceRef.current, {
    x: 400,
    rotateY: 70,
    opacity: 0
  });

  // Meet in the center
  tl.to(reminRef.current, {
    x: 0,
    rotateY: 0,
    opacity: 1,
    duration: 2,
    ease: "expo.out",
  })
    .to(
      isceRef.current,
      {
        x: 0,
        rotateY: 0,
        opacity: 1,
        duration: 2,
        ease: "expo.out",
      },
      "<"
    )

    cc.to(subtitleRef.current, {
        y: 0,
        opacity: 1, 
        duration: 0.8,
        ease: "power1.inOut"
    })

    // tiny bounce when they connect
    .to(
      [reminRef.current, isceRef.current],
      {
        scale: 1.05,
        duration: 0.18,
        yoyo: true,
        repeat: 1,
      },
      "-=0.15"
    );
});

    return (
        <>
            <section className="h-[80vh] w-screen overflow-hidden relative">
            <video autoPlay muted loop className="absolute object-cover w-full h-full">
                <source src="/heroupdated.mp4"/>
            </video>
                <div className="absolute inset-0 bg-black/50"></div>
                <div ref={scrollRef} className="flex flex-col justify-center items-center h-full w-full absolute text-center">
                    <LightningAnim>
                        <div  className="flex justify-center items-center text-gray-400 font-extrabold text-[clamp(3.5rem,14vw,25rem)]">
                        <p ref={reminRef}>Remin</p>
                        <p ref={isceRef}>isce</p>
                    </div>
                    </LightningAnim>

                        <div ref={subtitleRef} className="flex justify-center gap-3 items-center font-bold text-white text-[clamp(0.8rem,6vw,2rem)]">
                            <p>Connect. Collaborate. Grow</p>
                        </div>
                </div>
            </section>
        </>
    )
}