"use client"

import { Bebas_Neue, Playball } from "next/font/google"
import { useRef, useState } from "react"
import Menuitems from "../menuitems/page";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Image from 'next/image'
   
        const bebas = Playball({
        subsets: ["latin"],
        weight: "400",
        })


export default function Nav() {

    const[isOpen, setIsOpen] = useState(false)
 

    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent'}, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })

    
    })

    return (
        <>
        
        <nav className={"flex justify-between items-center px-8 py-5 text-[12px] fixed w-full z-99"}>
        {/* logo */}
        <p className={`${bebas.className} text-[1.1rem] cursor-pointer text-white`}>
              <div className="relative w-[30px] h-[30px]">
            <Image src="/remin_logo.png" fill className="object-contain text-red-500" alt=""/>
        </div>
        </p>

        {/* nav bar */}
        <ul className="xl:flex gap-5 font-bold cursor-pointer text-white hidden">
            <li className=" hover:text-gray-300 transition"> <Link to='about' smooth={true} duration={500} offset={0}>About</Link></li>
            <li className=" hover:text-gray-300 transition"> <Link to='features' smooth={true} duration={500} offset={0}>Features</Link></li>
            <li className=" hover:text-gray-300 transition"> <Link to='services' smooth={true} duration={500} offset={0}>Services</Link></li>
            <li className=" hover:text-gray-300 transition"> <Link to='contact' smooth={true} duration={500} offset={0}>Contact</Link></li>
        </ul>

            
        <button onClick={()=> setIsOpen((prev)=> !prev)} className="rounded-[5px] py-[6px] px-[30px] text-[0.8em] bg-yellow-600 text-white font-extrabold flex xl:hidden">
            {isOpen ? "Close" :"Menu"}
        </button>
        
        </nav>
         <Menuitems isOpen={isOpen} onClose={()=> setIsOpen(false)}/>
        </>
    )
}