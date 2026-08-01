import Image from "next/image"

type TextProps = {
    titlei: string;
    titleii: string;
    image: string;
}

export default function FeaturesList ({titlei, titleii, image}: TextProps) {
    return (
        <>
        <section className="pt-3 flex justify-center items-center w-full">
             <div className={"flex flex-col items-center  gap-10 xl:flex-row xl:items-center md:flex-row md:items-center"}>
            <div className="h-100 w-78 xl:w-150 md:w-150 rounded-4xl flex items-center justify-center bg-gray-900 relative">
                <Image src={image} priority fill alt="" className="object-contain"/>
            </div>
            <div className="xl:max-w-[700] xl:items-start md:max-w-[500] flex flex-col items-center">
                <p className={"font-bold text-[18px] md:text-[1.3em]"}>{titlei}</p>
                <p className={"font-bold text-[10px] text-center text-gray-600 md:text-[0.8em] xl:text-start"}>{titleii}</p>
            </div>
           </div>
        </section>
        </>
    )
}