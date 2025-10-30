import { Settings } from 'lucide-react'
import React from 'react'
import Slider from 'react-slick'
const settings: Settings = {
    dots: false,
    infinite: true,
    speed:500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500, 
    responsive:[
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                 slidesToScroll: 2,
                 infinite: true,
                 dots: false,
            },
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1 ,
                initialSlide: 1,
            },
        },
        {
        breakpoint: 480,
            settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
            },
        },
    ],
};

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
    <div className='bg-stone-50 h-screen w-full flex items-center flex-col justify-center gap-8'>
       <h1 className='lg:text-5xl text-3xl text-amber-700 font-bold'> OUR TEAM</h1>
        <Slider {...settings} className ="w-[80%]">
                    {images.map((engineer ,index)=>(
                         <div key={index} className=" lg:h-[70vh] justify-between mx-2 w-1/2 h-80 flex relative object-cover group">
                    <img  className="w-full h-full rounded-md" src={engineer.imgurl} alt="" />
                    <div className="-bottom-0 group-hover:bottom-full h-[70vh] w-full rounded-md  hidden transition-all duration-300 ease-linear text-2xl flex-col items-center justify-center text-white absolute top-0 left-0 bg-black/70 group-hover:flex">
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
