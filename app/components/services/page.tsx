"use client"

import LightningAnim from "@/app/providers/lightningAnim"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
    {
        src: "/cropped.jpg",
    
    },
    {
        src: "/picsii.jpg"
    },
    {
        src: "/croppedi.jpg"
    },
    {
        src: "/croppedii.jpg"
    },
    {
        src: "/IMGvii.PNG"
    },
    {
        src: "/IMGviii.jpg"
    },
    {
        src: "/IMGiv.PNG"
    },
    {
        src: "/IMGv.png"
    },
    {
        src: "/IMGix.JPG"
    }
]

const loopImages = [...images, ...images];

export default function Services() {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: "start",
        dragFree: true,
    },[
        Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: false
        })
    ])

    return (
        <>
            <section className="h-screen w-screen overflow-hidden bg-black py-10 services">
                <div className={"flex justify-center"}>
                    <LightningAnim useScrollTrigger={true}>
                    <h2 className={"text-1xl xl:text-5xl font-bold text-gray-500 pb-5"}>Beyond the Platform</h2>
                    </LightningAnim>
                </div>
                <div className={"flex justify-center"}>
                <p className={"max-w-150 text-gray-300 xl:text-[0.8em] text-[0.6em] text-center px-2"}>Building an audience takes more than consistency-it also takes great branding and a strong online presence. That's why we offer creative services to help creators and businesses bring their ideas to life.</p>
                </div>
                <div className={"flex flex-wrap gap-4 justify-between pt-10"}>
                <div>
                <p className={"max-w-150 font-extrabold text-[0.9em] text-gray-300 px-2"}>3D Design</p>
                <p className={"max-w-150 text-[0.7em] text-gray-300 px-2"}>Bring your ideas to life with stunning 3D visuals. Whether it's product renders, logo animations, promotional content, or motion graphics, we create high-quality visuals that help your brand stand out.</p>
                </div>
                <div>
                <p className={"max-w-150 font-extrabold text-[0.9em] text-gray-300 px-2"}>Graphic Design</p>
                <p className={"max-w-150 text-[0.7em] text-gray-300 px-2"}>Create a memorable brand identity. From social media graphics and brand assets to marketing materials and promotional designs, we craft visuals that communicate your message and leave a lasting impression.</p>
                </div>  
                </div>
                
                {/* display services */}
                <div className="overflow-hidden pt-10" ref={emblaRef}>
                    <div className="flex">
                    {loopImages.map((image, index) => (
                <div
                    key={index}
                className="flex-[0_0_70%] sm:flex-[0_0_45%] lg:flex-[0_0_28%] px-2"
                    >
                    <div className="relative h-72 sm:h-96 lg:h-[480px] overflow-hidden">
                    <Image
                        src={image.src}
                    alt=""
                    priority
                    fill
                    className="object-contain"
                    />
                    </div>
                </div>
                ))}
                </div>
            </div>
            </section>
        </>
    )
}