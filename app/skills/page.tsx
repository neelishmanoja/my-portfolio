import html from "@/public/html.png"
import css from "@/public/css.png"
import js from "@/public/js.png"
import ts from "@/public/ts.png"
import nextjs from "@/public/next.png"
import tailwind from "@/public/tailwind.png"
import Image from "next/image"
import Header from "@/components/header"


export default function skills() {
    return (
        <main className="w-screen h-screen">
            <Header text="Skills" />
            <div className="  flex w-full h-full bg-cover bg-center justify-center items-center" style={{ backgroundImage: "url(/main-bg.webp)" }}>
                <div className="grid grid-cols-3 items-center  border-purple-600  border-4 animate-bounce w-72 h-44 sm:w-[500px] sm:flex sm:gap-6 sm:justify-center sm:items-center md:w-[580px] lg:w-[900px] lg:h-72 lg:gap-10">
                    <Image src={html} alt="html logo" className="h-14 w-14 md:h-16 md:w-16 lg:h-28 lg:w-28" />
                    <Image src={css} alt="html logo" className="h-14 w-14 md:h-16 md:w-16 lg:h-28 lg:w-28" />
                    <Image src={js} alt="html logo" className="h-14 w-14 md:h-16 md:w-16 lg:h-28 lg:w-28" />
                    <Image src={ts} alt="html logo" className="h-14 w-14 md:h-16 md:w-16 lg:h-28 lg:w-28" />
                    <Image src={tailwind} alt="html logo" className="h-14 w-14 md:h-16 md:w-16 lg:h-28 lg:w-28" />
                    <Image src={nextjs} alt="html logo" className="h-14 w-14 md:h-16 md:w-16 lg:h-28 lg:w-28" />
                </div>
            </div>

        </main>
    )
}