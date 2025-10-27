import { Settings } from 'lucide-react'
import React from 'react'
import Slider from 'react-slick'

function Ourteam() {
  const images: {name: string, role: string, imgurl: string}[] = [
        {
            name:"Rahela Qambari",
            role:"Manager",
            imgurl:"/images/images (12).jfif"
        },
         {
            name:" Mohammad Qambari",
            role:"Civil Engineer",
            imgurl:"/images/download (5).jfif"
        },
         {
            name:"Ashraf Mhammadi",
            role:"Manager",
            imgurl:"/images/download (4).jfif"
        },
         {
            name:"Reza Razawe",
            role:"Juniore Engineer",
            imgurl:"/images/images (1).jfif"
        },
         {
            name:"Fida Qambari",
            role:"Manager",
            imgurl:"/images/images (19).jfif"
        },
    ]
  return (
    <div className='bg-stone-50 h-screen w-full flex items-center flex-col justify-center'>
       <h1 className='lg:text-5xl text-3xl text-amber-700 font-bold'> OUR TEAM</h1>
        <Slider {...Settings} className ="w-[50vh]">
                    {images.map((engineer ,index)=>(
                         <div key={index} className=" lg:h-[70vh] justify-between mx-2 w-1/2 h-80 flex relative object-cover group">
                    <img  className="w-full h-full rounded-md" src={engineer.imgurl} alt="" />
                    <div className="-bottom-full group-hover:bottom-0 h-96 w-full rounded-md  hidden transition-all duration-300 ease-linear text-2xl flex-col items-center justify-center text-white absolute top-0 left-0 bg-black/70 group-hover:flex">
                    <h1>{engineer.name}</h1>
                    <h1>{engineer.role}</h1>
                    </div>
                </div>
                    ))}                   
                </Slider>
    </div>
  )
}

export default Ourteam
