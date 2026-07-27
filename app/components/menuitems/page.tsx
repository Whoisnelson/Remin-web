"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-scroll";


 interface MenuitemsProps {
    isOpen: boolean;
    onClose: ()=> void;
 }

export default function Menuitems ({ isOpen, onClose }:MenuitemsProps ) {
       const menuRef = useRef<HTMLDivElement>(null);
        const tl = useRef<gsap.core.Timeline | null>(null)

        

       useGSAP(()=> {
            tl.current = gsap.timeline({paused: true});

            gsap.to(menuRef.current, {
            y: isOpen ? 0: "-100%",
            duration: 0.8,
            ease: "power4.inOut"
        })
        
        tl.current.to(menuRef.current, {
            y: 0,
            duration: 0.8,
            ease: "power4.inOut"
        })
        .from(
            ".menu-item", {
                x: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.5
            },
            "-=0.3"
        )
       }, [])

       useGSAP(()=> {
        if(isOpen){
            tl.current?.play();
        } else {
            tl.current?.reverse()
        }
       },[isOpen])

    return (
        <>
        <section ref={menuRef} className="fixed left-0 top-0 bg-black  w-screen h-[50%] text-gray-200 z-50 translate-y-[-100%]"> 
        <ul className={" font-extrabold text-[2rem]  px-2 pt-20"}>
            <li className={"border-b-[0.5px] border-gray-500 menu-item"}><Link to="about" smooth={true} duration={500} offset={0} onClick={onClose}>About</Link></li>
            <li className={"border-b-[0.5px] border-gray-500 menu-item"}><Link to="work" smooth={true} duration={500} offset={0} onClick={onClose}>Work</Link></li>
            <li className={"border-b-[0.5px] border-gray-500 menu-item"}><Link to="services" smooth={true} duration={500} offset={0} onClick={onClose}>Service</Link></li>
            <li className={"border-b-[0.5px] border-gray-500 menu-item"}><Link to="Process" smooth={true} duration={500} offset={0} onClick={onClose}>Process</Link></li>
            <li className={"border-b-[0.5px] border-gray-500 menu-item"}><Link to="contact" smooth={true} duration={500} offset={0} onClick={onClose}>Contact</Link></li>
        </ul>
        </section>
        </>
    )
}