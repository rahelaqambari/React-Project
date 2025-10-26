import {Routes,BrowserRouter,Route} from "react-router-dom";
import Navbar from "./Mycomponent/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Weather from "./Pages/Weather";
import About from "./Pages/About";
import Notfound from "./Pages/Notfound";

function App(){
  return(
    <div className="bg-stone-50 relative">
      <Navbar />
      <div className=" mx-auto w-full">
        <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Service" element={<Services/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Weather" element={<Weather/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/*" element={<Notfound/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}
export default App;
