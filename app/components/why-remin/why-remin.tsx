"use client"

import LightningAnim from "@/app/providers/lightningAnim"
import TextCycle from "@/app/providers/textCycle"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "gsap/src/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);


export default function WhyRemin () {

    useGSAP(() => {
    
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((paragraph) => {
    const split = new SplitText(paragraph, {
      type: "lines",
    });

    gsap.set(split.lines, {
      opacity: 0.2,
    });

    gsap.to(split.lines, {
      opacity: 1,
      stagger: 0.15,
      ease: "none",

      scrollTrigger: {
        trigger: paragraph,
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  });
});

    return (
        <>
        <section className="h-[90%] w-screen bg-black pt-[20px] flex gap-5 flex-col xl:flex-row xl:h-[90vh]  px-2 about">
            {/* part 1 */}
        <div className="w-full text-center xl:text-start xl:text-[2em]">
            <TextCycle className="text-white" words={[
                "consistency is Everything.",
                "Better Together.",
                "Never Lose an Idea.",
                "Small Habits. Big Growth.",
                "Grow Together."
            ]}/>
            <TextCycle className="text-[10px] text-gray-400 text-center w-full xl:text-start xl:text-[0.5em]" words={[
                "Most creators don't struggle because they lack talent. They struggle because ideas disappear before they're written down, motivation comes and goes, and finding like-minded creators to collaborate with isn't always easy. Building an audience shouldn't feel like a journey you have to take alone.",
                "The right collaboration can introduce you to new audiences, spark fresh ideas, and open opportunities you never expected. Yet discovering creators who genuinely share your goals can be surprisingly difficult.", 
                "The best content ideas rearly arrive at the perfect time. They show up while you're driving, walking, working, or just before you fall asleep. Without somewhere to capture them instantly, they're often forgotten before they ever become content.",
                "The creators who grow aren't always the most talented, they're the ones who keep showing up. Building simple daily habits can male the difference between posting occationally and creating consistently.",
                "Creating content can feel lonely, nut it doesn't have to. The strongest creators learn from one another, collaborate on ideas, and grow as part of a community that shares the same passion."
                ]}/>
        </div>

        {/* part 2 */}
        <div className={"flex flex-col gap-1 text-[0.9em] xl:text-2xl xl:gap-3 font-extrabold w-full"}>
          
            <p className={"text-white reveal"}>Most social platforms are built for consuming content.</p>
         
            <p className={"text-white reveal"}>Remin is built for creating it</p>
        
            <p className={"text-white reveal"}>We believe creators need more than another place to connect with other creators, collaborate on ideas, stay accountable to their goals, and grow together.</p>
           
            <p className={"text-white reveal"}>Whether you're looking for your next creative partner, trying to build a consistent posting habit, or simply searching for a place where your ideas don't get lost, Remin is designed around the creator journey</p>
            <p className={"text-white reveal"}>With features like creator networking, collaboration, ideas capture, and consistency tools, Remin helps turn creativity into habit, not just a moment of inspiration</p>
            <p className={"text-white reveal"}>Because when creators have the right people around them and the right tools beside them, create more, grow faster, and inspire each other along the way</p>
        </div>
        </section>
        </>
    )
}