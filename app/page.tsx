import Button from "@/components/button";
import Header from "@/components/header";
import Hero from "@/components/hero";


export default function Home() {
  return (
    
    <main className="w-screen h-screen">
      <Header text="My porfolio."/>
      <div className="flex w-full h-full bg-cover bg-center" style={{backgroundImage:"url(/main-bg.webp)"}}>
      <Hero/>
      
        
      </div>
      
            
            

    </main>
    )
}
