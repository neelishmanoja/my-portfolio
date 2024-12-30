import Header from "@/components/header";
import amazon from "@/public/amazon.jpeg"
import resume from "@/public/static resume.png"
import Image from "next/image";
import Link from "next/link";

export default function projects(){
    return(
        <main className="w-full h-full lg:h-[660px]">
            <Header text="Projects"/>
            <div className="flex w-full h-full bg-cover bg-center  justify-center" style={{backgroundImage:"url(/main-bg.webp)"}} >
              <h1 className=" mt-4 font-bold absolute  text-4xl lg:text-5xl lg:mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Github repo:</h1>
                <div className="mt-20">
                    <div className="h-[217px] w-80 md:w-[350px] md:h-[236px] lg:w-[450px] lg:h-[303px] border-purple-600 border-4 flex justify-center">
                        <Link href="https://amazon-chi-plum-59.vercel.app/">
                        <Image src={amazon} alt="amazon logo"/></Link>
                    </div>
                    <div className="h-[155px] w-80 md:w-[350px] md:h-[167px] lg:w-[450px] lg:h-[214px] border-purple-600 border-4 flex justify-center mt-7 md:mb-4" >
                    <Link href="https://milstones1-2.vercel.app/">
                    <Image src={resume} alt="resume"/></Link>
                    </div>
                </div>
            </div>
        </main>
    )
}