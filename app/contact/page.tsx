import Image from "next/image";
import facebook from "@/public/facebook.svg"
import instagram from "@/public/instagram.svg"
import github from "@/public/github1.jpg"
import Link from "next/link";
import Header from "@/components/header";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


export default function contact() {
    return (
        <main className="w-full h-full lg:h-[652px] ">
            <Header text="contact me" />
            <div className="flex justify-center bg-cover w-full h-full bg-center " style={{ backgroundImage: "url(/main-bg.webp)" }}>
                <div className=" ">
                    <div>
                        <div className=" w-72 sm:w-80 md:w-96 lg:w-[500px] lg:h-[450px] p-6 bg-white rounded-lg shadow-md mt-16">
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
                    <div className=" flex ml-20 mt-10 md:ml-32 lg:ml-40">
                        <div className="text-white text-4xl">
                            <a href="https://www.facebook.com/profile.php?id=100004881468193"><FaFacebook /></a>
                        </div>
                        <div className="text-white text-4xl ml-5">
                            <a href="https://www.linkedin.com/in/neelish-manoja-17a7642b5/"><FaLinkedin /></a>
                        </div>
                        <div className="text-white text-4xl ml-5">
                            <a href="https://www.instagram.com/neelish_manoja/"><GrInstagram /></a>
                        </div>
                    </div>


                </div>

            </div>
        </main>





    )
}