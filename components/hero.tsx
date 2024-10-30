
import Image from "next/image"
import Button from "./button"
import mypic from "@/public/mypic.jpeg"
import Link from "next/link"



export default function Hero() {
    return (


        <div className="pl-20  flex flex-col gap-5 max-w-[750px]">
            <h1 className="text-[50px] text-white font-semibold ">
            Make anything posible with
            </h1>
            <span className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                web development
            </span>
            <p className="text-gray-200  text-xl font-semibold">
                Hi! i am </p>
                <p className=" -mt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold text-4xl">Neelish manoja</p>
            <div className="flex flex-row gap-3">
                <div className="hover:scale-110 duration-300 capitalize active:scale-100">
                 <Link href="/skills">  <Button text="My skills" /> </Link> </div>
                <div className="hover:scale-110 duration-300 capitalize active:scale-100"><Link href="/about"><Button text="About" /></Link> </div>
                <div className="hover:scale-110 duration-300 capitalize active:scale-100"><Link href="/projects"><Button text="Projects" /></Link></div>
                <div className="hover:scale-110 duration-300 capitalize active:scale-100"><Link href="/contact"><Button text="Contact me" /></Link></div>
                
                
                
            </div>
            {/*right section*/}
            <div className=" absolute ml-[700px] mt-24 h-[250px] w-[250px] overflow-hidden rounded-full ">
                <Image src={mypic} alt="myprofilpic" className=" relative bottom-10" />
            </div>

        </div>

    )
}