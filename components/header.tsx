
import React from "react"

interface Iprops {
    text: string,
}

export default function Header(props: Iprops) {
    return (
        <div className=" flex items-center  h-20 bg-gradient-to-r from-purple-800 to-black ">
            <span className=" pl-10 font-extrabold font-sans text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-700 hover:cursor-pointer ">{props.text}</span>

        </div>
    )
} 