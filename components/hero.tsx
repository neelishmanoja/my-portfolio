
import Image from "next/image"
import Button from "./button"
import mypic from "@/public/mypic.jpeg"
import Link from "next/link"



export default function Hero() {
    return (

        <section className="-mt-4 sm:mt-0 flex justify-center w-full">
            <div className="sm:items-center  w-full h-full bg-cover bg-center flex justify-center md:h-[420px] lg:h-[655px]" style={{ backgroundImage: "url(/main-bg.webp)" }}>
            <div className="sm:flex sm:justify-center">
                <div>
                    <div>
                        <h1 className="mt-4 text-[23px] w-80 text-white font-bold sm:text-[30px] sm:w-[400px] md:text-[38px] md:w-[500px] lg:text-[60px] lg:w-[700px]">
                            Make anything possible with...
                        </h1>
                        <span className="text-[45px] w-80 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 sm:text-4xl md:text-[50px] md:w-[300px] lg:text-[60px] lg:w-[500px]">
                            web development
                        </span>
                        <div>
                        <p className="text-gray-200  text-xl sm:text-2xl lg:text-3xl font-semibold mt-5">
                            Hi! i am </p>
                        <p className="  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold text-4xl h-12 sm:text-[45px] sm:h-14 lg:text-6xl lg:h-20">Neelish manoja</p>
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-5 lg:gap-4 mt-6 sm:mt-10 w-80 md:w-[500px]">
                        <div className="hover:scale-110 duration-300 capitalize active:scale-100"><Link href="/skills">  <Button text="My skills" /> </Link></div>
                        <div className="hover:scale-110 duration-300 capitalize active:scale-100"><Link href="/about"><Button text="About" /></Link> </div>
                        <div className="hover:scale-110 duration-300 capitalize active:scale-100"><Link href="/projects"><Button text="Projects" /></Link></div>
                        <div className="hover:scale-110 duration-300 capitalize active:scale-100"><Link href="/contact"><Button text="Contact me" /></Link></div>
                    </div>
                </div>
                {/*right section*/}
                <div>
                    <div className="mt-14 h-[300px] w-[300px] overflow-hidden rounded-full sm:-ml-8 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:mt-16 lg:ml-14 lg:h-[420px] lg:w-[420px]">
                        <Image src={mypic} alt="myprofilpic" className=" relative bottom-11" />
                    </div>
                </div>
                </div>
            </div>

        </section>

    )
}