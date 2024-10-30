import Header from "@/components/header";

export default function about(){
    return(
        <main className="w-screen h-screen">
            <Header text="About"/>
        <div className="flex w-full h-full bg-cover bg-center" style={{backgroundImage:"url(/main-bg.webp)"}}>
           <h2 className="text-3xl font-semibold font-serif w-[50%] flex mt-20 ml-20 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 ">I am an aspiring website developer, currently mastering front-end development to create dynamic, user-friendly, and visually engaging websites. With each project, I am sharpening my skills in modern web technologies, aiming to build efficient and responsive digital experiences</h2>


        </div>
        </main>
    )
}