export default function Aboutp(){
    return(
        <div className="h-fit w-full bg-stone-50 flex items-center justify-center">
            <div className= " h-full py-8  w-full border bg-black/20 flex space-y-10 justify-between">
            <div className="w-1/2 flex flex-col items-center justify-center gap-8 ">
             <h1 className='lg:text-5xl text-3xl text-amber-700 font-bold'>ABOUT US</h1> 
             <p className=" w-[80vh]">Lorem, ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corporis, error architecto at incidunt impedit odio necessitatibus deserunt velit voluptatum, eum repellat tempore mollitia dolor minus quae atque repellendus amet? adipisicing elit. Officiis ad officia dolores sit blanditiis! Corrupti cumque quos ipsam natus incidunt quas optio cupiditate totam, nobis cum sint ut repellat harum.</p>
            </div>
            <div className="h-full w-1/2 flex items-center justify-center">
            <img className="h-[70vh] w-[90vh]  rounded-2xl border-2" src="/images/images (29).jfif" alt="" />
            </div>
            </div>
        </div>
    )
}