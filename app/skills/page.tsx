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
            <Header text="Skills"/>
            <div className="  flex w-full h-full bg-cover bg-center justify-center items-center" style={{ backgroundImage: "url(/main-bg.webp)" }}>
               <div className="flex gap-6  border-purple-600 p-20 border-4 animate-bounce">
                <Image src={html} alt="html logo" className="h-20 w-20" />
                <Image src={css} alt="html logo" className="h-20 w-20" />
                <Image src={js} alt="html logo" className="h-20 w-20" />
                <Image src={ts} alt="html logo" className="h-20 w-20" />
                <Image src={tailwind} alt="html logo" className="h-20 w-20" />
                <Image src={nextjs} alt="html logo" className="h-20 w-20" />
                </div>
            </div>

        </main>
    )
}