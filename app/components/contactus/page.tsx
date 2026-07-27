import { ArrowUpRight } from "lucide-react"

import { Playball } from "next/font/google"

    const playball = Playball({
        subsets: ["latin"],
        weight: "400",
        })

export default function ContactUs() {
    return(
        <>
            <section className="h-[50vh] lg:h-[50vh] w-screen flex flex-col justify-between bg-gray-900 contact">
                <div className="flex flex-col justify-center">
                <div className="h-[25%] flex justify-between items-center xl:justify-evenly text-2xl py-10 px-2">
                    <div className="text-gray-300">
                        <p className={`${playball.className} text-[1.1rem] cursor-pointer text-gray-300`}>Remin</p>
                        <p className="text-[0.4em] xl:text-[0.8em]">Building for creators worldwide.</p>
                        <p className="text-[0.4em] xl:text-[1em]">reminiscecreatorsapp@gmail.com</p>
                    </div>
                    {/* socials */}
                <div>
                <ul className="text-[0.5em] text-blue-500 lg:text-[1em] flex flex-col gap-1">
                    <li><a href="https://instagram.com/remin_app" className="hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer" >Instagram <ArrowUpRight className="inline size-4"/></a></li>
                    {/* <li>YouTube <ArrowUpRight className="inline size-4"/></li>
                    <li>Email <ArrowUpRight className="inline size-4"/></li> */}
                </ul>  
                </div>
                </div>  
                </div>
            </section>
        </>
    )
}