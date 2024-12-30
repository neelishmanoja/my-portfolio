import Header from "@/components/header";
import Image from "next/image"
import mypic from "@/public/mypic.jpeg"

export default function about() {
    return (
        <main className="w-screen h-screen">
            <Header text="About" />
            <div className="flex justify-center items-start w-full h-full sm:h-[530px] bg-cover bg-center" style={{ backgroundImage: "url(/main-bg.webp)" }}>
                <div className=" absolute mt-4  h-[300px] w-[250px] overflow-hidden  sm:-ml-8 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:mt-16 lg:ml-14 lg:h-[420px] lg:w-[420px]">
                    <Image src={mypic} alt="myprofilpic" className=" relative bottom-11" />
                </div>
                <div className="mt-[330px]">
                    <div className=" text-[15px] font-semibold font-serif w-80 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 sm:text-[19px] sm:w-[450px] md:text-[24px] md:w-[600px] lg:text-[40px] lg:w-[800px] ">
                        <h2 className="mb-2 text-2xl">
                            Iam a Web Developer
                        </h2>
                        <p>Web Development |Expert in HTML , CSS and Continue JavaScript and Typescript | Student at Governer Sindh Initative And Cloud Computing</p>
                    </div>
                </div>
            </div>
        </main>
    )
}