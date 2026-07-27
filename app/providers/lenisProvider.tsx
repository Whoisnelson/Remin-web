"use client"

import { useEffect, useRef } from "react";
import ReactLenis, { type LenisRef } from "lenis/react";
import 'lenis/dist/lenis.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const  LenisSmoothScroll = () => {
    const lenisRef = useRef<LenisRef>(null);
    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);
        
        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0)

        requestAnimationFrame(()=> {
            ScrollTrigger.refresh();
        })
        

        return () => {
            lenisRef.current?.lenis?.off("scroll", ScrollTrigger.update);
           gsap.ticker.remove(update) 
        }
    }, []);
    return <ReactLenis root options={{ autoRaf: false, duration: 1.2, touchMultiplier: 2, syncTouch: true}} ref={lenisRef} />
}

export default LenisSmoothScroll;