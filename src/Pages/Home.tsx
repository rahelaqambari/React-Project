import Aboutus from "@/Mycomponent/Aboutus";
import FAQ from "@/Mycomponent/FAQ";
import Footer from "@/Mycomponent/Footer";
import Hero from "@/Mycomponent/Hero";
import Idea from "@/Mycomponent/Idea";

export default function Home (){
    return(
        <div>
            <Hero />
            <Aboutus />
            <FAQ />
            <Idea />
            <Footer />
        </div>
    )
}