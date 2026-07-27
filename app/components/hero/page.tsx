"use client"

import LightningAnim from "@/app/providers/lightningAnim";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from 'gsap';
import Waitlist from "../utils/waitlist-page";
import  Image  from "next/image"

import {
  Camera,
  Video,
  Mic,
  Headphones,
  PenTool,
  Palette,
  Lightbulb,
  NotebookPen,
  Monitor,
  Smartphone,
  Laptop,

  // New ones
  Users,
  UserRoundPlus,
  MessageCircle,
  MessagesSquare,
  HeartHandshake,
  Sparkles,
  WandSparkles,
  Brain,
  BookOpen,
  PencilRuler,
  Clapperboard,
  Film,
  ImageIcon,
  Play,
  BadgePlus,
  Globe,
  Link,
  Workflow,
  Rocket,
  Target,
  Clock3,
  CalendarDays,
  CheckCircle2,
  CircleDashed,
  Bot,
  Speech,
  LucideIcon
} from "lucide-react";
import { useState } from "react";

interface FloatingIcon {
    Icon: LucideIcon;
    top: string;
    left: string;
    size: number,
    opacity: number;
    rotation: number
}

const colors = [
  "#ffffff",
  "#d4d4d8", // zinc
  "#a78bfa", // violet
  "#818cf8", // indigo
  "#c084fc", // purple
];

const icons: FloatingIcon[] = [
    // Productivity
{
  Icon: Laptop,
  top: "28%",
  left: "5%",
  size: 38,
  opacity: 0.18,
  rotation: -12,
},
{
  Icon: Monitor,
  top: "12%",
  left: "58%",
  size: 34,
  opacity: 0.15,
  rotation: 18,
},
{
  Icon: Smartphone,
  top: "82%",
  left: "72%",
  size: 28,
  opacity: 0.16,
  rotation: -30,
},
{
  Icon: Headphones,
  top: "48%",
  left: "95%",
  size: 30,
  opacity: 0.18,
  rotation: 22,
},

// Learning
{
  Icon: BookOpen,
  top: "8%",
  left: "35%",
  size: 28,
  opacity: 0.14,
  rotation: -15,
},

// Profile / Creator
{
  Icon: BadgePlus,
  top: "90%",
  left: "12%",
  size: 24,
  opacity: 0.14,
  rotation: 25,
},

  {
    Icon: Camera,
    top: "8%",
    left: "6%",
    size: 20,
    opacity: 0.15,
    rotation: -20,
  },
  {
    Icon: Video,
    top: "15%",
    left: "84%",
    size: 38,
    opacity: 0.25,
    rotation: 12,
  },
  {
    Icon: Mic,
    top: "72%",
    left: "10%",
    size: 30,
    opacity: 0.18,
    rotation: 35,
  },
  {
    Icon: NotebookPen,
    top: "82%",
    left: "38%",
    size: 30,
    opacity: 0.15,
    rotation: -15,
  },
  {
    Icon: Lightbulb,
    top: "12%",
    left: "48%",
    size: 32,
    opacity: 0.2,
    rotation: 20,
  },

  // Creator Community
  {
    Icon: Users,
    top: "25%",
    left: "18%",
    size: 28,
    opacity: 0.18,
    rotation: -18,
  },
  {
    Icon: UserRoundPlus,
    top: "18%",
    left: "63%",
    size: 24,
    opacity: 0.15,
    rotation: 14,
  },
  {
    Icon: HeartHandshake,
    top: "76%",
    left: "80%",
    size: 28,
    opacity: 0.18,
    rotation: 8,
  },
  {
    Icon: MessageCircle,
    top: "40%",
    left: "7%",
    size: 26,
    opacity: 0.16,
    rotation: -25,
  },
  {
    Icon: MessagesSquare,
    top: "58%",
    left: "92%",
    size: 30,
    opacity: 0.18,
    rotation: 15,
  },

  // Ideas
  {
    Icon: Brain,
    top: "32%",
    left: "70%",
    size: 36,
    opacity: 0.15,
    rotation: -15,
  },
  {
    Icon: Sparkles,
    top: "65%",
    left: "55%",
    size: 28,
    opacity: 0.15,
    rotation: 12,
  },
  {
    Icon: WandSparkles,
    top: "86%",
    left: "20%",
    size: 30,
    opacity: 0.12,
    rotation: 30,
  },

  // Creativity
  {
    Icon: Palette,
    top: "54%",
    left: "86%",
    size: 38,
    opacity: 0.16,
    rotation: -25,
  },
  {
    Icon: PenTool,
    top: "47%",
    left: "30%",
    size: 28,
    opacity: 0.15,
    rotation: 22,
  },
  {
    Icon: PencilRuler,
    top: "20%",
    left: "30%",
    size: 28,
    opacity: 0.14,
    rotation: -20,
  },

  // Video
  {
    Icon: Clapperboard,
    top: "60%",
    left: "72%",
    size: 34,
    opacity: 0.18,
    rotation: -10,
  },
  {
    Icon: Film,
    top: "38%",
    left: "90%",
    size: 32,
    opacity: 0.14,
    rotation: 20,
  },
  {
    Icon: Play,
    top: "10%",
    left: "90%",
    size: 24,
    opacity: 0.18,
    rotation: 0,
  },
  {
    Icon: ImageIcon,
    top: "80%",
    left: "65%",
    size: 30,
    opacity: 0.15,
    rotation: 12,
  },

  // Growth
  {
    Icon: Rocket,
    top: "30%",
    left: "50%",
    size: 30,
    opacity: 0.15,
    rotation: -15,
  },
  {
    Icon: Target,
    top: "50%",
    left: "15%",
    size: 32,
    opacity: 0.15,
    rotation: 18,
  },
  {
    Icon: Globe,
    top: "72%",
    left: "46%",
    size: 34,
    opacity: 0.14,
    rotation: -10,
  },
  {
    Icon: Link,
    top: "12%",
    left: "20%",
    size: 26,
    opacity: 0.15,
    rotation: 25,
  },
  {
    Icon: Workflow,
    top: "85%",
    left: "88%",
    size: 28,
    opacity: 0.14,
    rotation: -18,
  },

  // Consistency
  {
    Icon: CalendarDays,
    top: "42%",
    left: "58%",
    size: 30,
    opacity: 0.15,
    rotation: 20,
  },
  {
    Icon: Clock3,
    top: "66%",
    left: "26%",
    size: 28,
    opacity: 0.14,
    rotation: -12,
  },
  {
    Icon: CheckCircle2,
    top: "8%",
    left: "70%",
    size: 26,
    opacity: 0.15,
    rotation: 10,
  },
  {
    Icon: CircleDashed,
    top: "88%",
    left: "55%",
    size: 28,
    opacity: 0.12,
    rotation: -25,
  },

  // AI
  {
    Icon: Bot,
    top: "35%",
    left: "42%",
    size: 28,
    opacity: 0.15,
    rotation: 20,
  },
  {
    Icon: Speech,
    top: "58%",
    left: "5%",
    size: 26,
    opacity: 0.15,
    rotation: -15,
  },
];



export default function Hero() {

  const [open, setOpen] = useState(false);

    useGSAP(()=>{
       const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paraSplit = new SplitText('.para', {type: 'lines'});
        const tl = gsap.timeline();

       tl.from(heroSplit.chars, {
            yPercent: 100,
            duration: 0.5,
            ease: 'expo.out',
            stagger: 0.06,
            opacity: 0
       })

        tl.add(()=>{ gsap.to(heroSplit.chars, {
        y: "random(-25,-10)",
        x: "random(-25,-10)",
        duration: "random(2.5,3.5)",
        rotation: "random(5.5,-8)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.08,
       })
        })

       gsap.from(paraSplit.lines, {
            yPercent: 100,
            duration: 1.8,
            opacity: 0,
            ease: 'expo.out',
            stagger: 0.09,
            delay: 0.6
       })

       gsap.utils.toArray<HTMLElement>(".floating-icon").forEach((icon) => {
        gsap.to(icon, {
        x: "random(-40,40)",
        y: "random(-40,40)",
        rotation: `+=${gsap.utils.random(-12, 12)}`,
        scale: gsap.utils.random(0.9, 1.15),
        duration: gsap.utils.random(5, 10),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
});
});

    },[])
    
    return (
        
        <>
        <section className={"flex flex-col justify-center h-screen w-screen items-center overflow-hidden relative"}>
            <video autoPlay muted loop className="absolute object-cover w-full h-full">
                <source src="/heroupdated.mp4"/>
            </video>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="z-10 text-white px-2 w-full flex flex-col items-center">
              <div className="relative w-[100px] h-[100px]">
                  <Image src="/remin_logo.png" fill className="object-contain text-red-500" alt=""/>
              </div>
            <p className={"text-[0.6em] max-w-120 text-center font-extrabold sm:max-w-[280] xl:text-[1.3em] xl:max-w-200 lg:text-[1.3em] lg:max-w-170 md:text-[1.2em] md:max-w-150 para"}>
                The place where content creators connect, collaborate, share ideas, and stay consistent on their cretive journey.
            </p>
             <p className="text-[0.6em] pt-7 text-center max-w-[290] sm:max-w-[290] xl:text-[1.3em] xl:max-w-200 lg:text-[1.3em] lg:max-w-190 md:text-[1.2em] md:max-w-150 font-extrabold para">
               Join a community built for creators who want more than just likes and views. Connect with like-minded creators, capture ideas as they come, build consistent creative habits, and grow together
            </p>   
            </div>
            <div className="absolute inset-0 overflow-hidden">
            {icons.map(({ Icon, top, left, opacity, rotation, size}, index) => (
            <div
                key={index}
                className="floating-icon absolute"
                style={{
                top,
                left,
                transform: `rotate(${rotation}deg)`
                 }}
                    > 
                <Icon
                style={{
                    width: size,
                    height: size,
                    opacity,
                    color: colors[index % colors.length]
                }}
                className="text-white" />
                </div>
                ))}
                </div>
           
            <section className="flex gap-2 pt-5 z-10">
            {/* <button  className="rounded-[4px] py-[9px] px-[18px] xl:px-[50px] xl:py-[13px] text-[0.6em] bg-black text-white font-bold sm:px-[35px]">
                AppStore
            </button>
            <button  className={"rounded-[4px] py-[2px] px-[18px] xl:px-[50px] xl:py-[13px] text-[0.6em] bg-black text-white font-bold sm:px-[25px]"}>
                PlayStore
            </button> */}
            <button onClick={()=> setOpen(true)}  className="rounded-[4px] py-[9px] px-[15px] xl:px-[50px] xl:py-[13px] text-[0.6em] text-white xl:font-extrabold bg-purple-600 font-bold sm:px-[25px]">
                Join the Waitlist
            </button>
            </section>
            
            <div className={"absolute bottom-0"}>
               <LightningAnim>
            <h1 className={"text-9xl font-bold text-gray-500 title text-[clamp(3.5rem,14vw,30rem)]"}>
                Reminisce
            </h1>
            </LightningAnim> 
            </div> 
        </section>
        <Waitlist open={open} onOpenChange={setOpen}/>
        </>
    )
}