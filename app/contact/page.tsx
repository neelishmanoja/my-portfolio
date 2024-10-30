import Image from "next/image";
import facebook from "@/public/facebook.svg"
import instagram from "@/public/instagram.svg"
import github from"@/public/github1.jpg"
import Link from "next/link";
import Header from "@/components/header";


export default function contact() {
    return (
        <main className="w-screen h-screen ">
            <Header text="contact me"/>
            <div className=" bg-cover w-full h-full bg-center " style={{ backgroundImage: "url(/main-bg.webp)" }}>
                <div className="flex justify-center ">
                    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md mt-20">
                        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">Contact Me</h2>
                        <form action="#" method="POST" >

                            <div className="mb-4">
                                <label className=" text-gray-600" >Name</label>
                                <input type="text" id="name" name="name" required
                                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>


                            <div className="mb-4">
                                <label className=" text-gray-600" >Email</label>
                                <input type="email" id="email" name="email" required
                                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>


                            <div className="mb-4">
                                <label className=" text-gray-600" >Message</label>
                                <textarea id="message" name="message" required
                                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                            </div>

                            <div>
                                <button type="submit"
                                    className="w-full px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    

                </div>
                <div className=" flex gap-3 ml-[450px] mt-4 ">
                    <Link href="https://www.facebook.com/profile.php?id=100004881468193">
                        <Image src={facebook} alt="facebook logo" className="h-8 w-8 hover:scale-95" />
                        </Link>
                        <Link href="https://www.instagram.com/neelish_manoja/">
                        <Image src={instagram} alt="instagram logo" className="h-8 w-8   hover:scale-95 "/>
                        </Link>
                        <Link href="https://github.com/">
                        <Image src={github} alt="github logo" className="h-10 w-10  hover:scale-95 "/>
                        </Link>
                    </div>

            </div>
        </main>





    )
}