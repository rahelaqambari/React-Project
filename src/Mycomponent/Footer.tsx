import { Button } from "@/components/ui/button";
import { Copyright, Facebook, Instagram, LinkedinIcon, TwitterIcon, Youtube } from "lucide-react";

export default function Footer(){
    return (
       <div className="h-fit w-full pb-20 flex justify-center items-center">
         <div className="flex flex-col h-[70%] w-[90%] bg-amber-700 ">
        <div className="h-full w-full bg-amber-700 p-20 flex lg:flex-row flex-col justify-center items-center">
        <div className="w-[30%] h-full lg:border-r border-white  flex flex-col gap-2 text-white items-center justify-center">
             <h1 className="text-2xl font-medium cursor-pointer">Home</h1>
             <h1 className="text-2xl font-medium cursor-pointer">Services</h1>
             <h1 className="text-2xl font-medium cursor-pointer">Blog</h1>
             <h1 className="text-2xl font-medium cursor-pointer">Contact</h1>
             <h1 className="text-2xl font-medium cursor-pointer">About</h1>
             <h1 className="text-2xl font-medium cursor-pointer">Weather</h1>
        </div>
         <div className="w-[40%] h-full lg:border-r  border-white  flex flex-col gap-2 text-white items-center justify-center">
          <div className="h-full w=ful flex gap-3 cou">
          < Instagram className="cursor-pointer"/>
          < Facebook className="cursor-pointer"/>
          < TwitterIcon className="cursor-pointer"/>
          < Youtube className="cursor-pointer"/>
          < LinkedinIcon className="cursor-pointer"/>
            </div>  
           <h1 className=" lg:text-4xl  text-center text-2xl py-10 font-medium text-">Sharifi Constraction Company</h1>
           <Button className="text-amber-700 hover:bg-amber-700 hover:text-white hover:border bg-white ">Follow Now</Button>
        </div>
         <div className="lg:w-[30%] w-full h-full  flex flex-col gap-2 text-white items-center justify-center">
            <h1 className="text-3xl font-light">Our Useful Linkes</h1>
             <h1 className="text-2xl font-medium cursor-pointer">History</h1>
             <h1 className="text-2xl font-medium cursor-pointer">Our Team</h1>
             <h1 className="text-2xl font-medium cursor-pointer">Privacy Policy</h1>
             <h1 className="text-2xl font-medium cursor-pointer">Services Offered</h1>
             <h1 className="text-2xl font-medium cursor-pointer">Product Catalog</h1>
        </div>
        </div>
        <div className="flex justify-center items-center w-full text-white ">
         <h1 className="text-lg">Copyright</h1>
        <Copyright size={20} />
         <h1 className="text-lg">2025 Sharifi High School all rights reserved,</h1>
        </div>
        </div>
       </div>
    )
}