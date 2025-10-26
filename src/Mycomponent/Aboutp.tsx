export default function Aboutp(){
    return(
        <div className="h-screen w-full bg-stone-50 flex items-center justify-center">
            <div className="h-[70vh] w-[90%] border border-black/40 bg-black/30 flex space-y-10 justify-between">
            <div className="w-1/2 flex flex-col items-center justify-center ">
             <h1 className='lg:text-4xl text-3xl text-white'>ABOUT US</h1>
             <h1 className='lg:text-4xl text-3xl text-white'>We bring the realatiy in the real wrold</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore sint eos tenetur nobis, excepturi eveniet labore impedit itaque vel maiores sunt sed quisquam eligendi, voluptate natus dignissimos, cupiditate </p>
             <p className="text-white w-[80vh]">Lorem, ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corporis, error architecto at incidunt impedit odio necessitatibus deserunt velit voluptatum, eum repellat tempore mollitia dolor minus quae atque repellendus amet? adipisicing elit. Officiis ad officia dolores sit blanditiis! Corrupti cumque quos ipsam natus incidunt quas optio cupiditate totam, nobis cum sint ut repellat harum.</p>
            </div>
            <div className="h-full w-1/2">
                <img className="h-full w-full" src="/images/About.jfif" alt="" />
                <img className="h-full w-full" src="/images/About.jfif" alt="" />
               
            </div>
            </div>
        </div>
    )
}