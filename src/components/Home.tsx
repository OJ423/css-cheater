import { Link } from "react-router-dom";
import {motion as m } from 'framer-motion'
import cssCheaterHomeImg from "/css-cheater-web-elements-for-designers.png";

export default function Home() {
  return (
    <>
    <m.section
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration: 1.5}}
      exit={{opacity:0}}
      className="w-[100%] py-20 lg:py-40 xl:py-60 flex flex-col flex-1 gap-8 justify-center items-center bg-gradient-to-tl from-rose-100 to-teal-100 -mb-16">
      <div className="px-4 sm:px-16 max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="lg:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-8">
            CSS Cheater - CSS, HTML, React and Tailwind Web Elements to Copy
          </h1>
          <p className="font-medium sm:text-lg">
            A little React project to hone my skills and provide web designers
            and devs with free web elements I like, either found or created by
            me. The site features HTML/CSS and React/Tailwind components.
          </p>
        </div>
        <div>
          <img
            className="w-[80%] lg:w-[100%] h-auto m-auto"
            src={cssCheaterHomeImg}
            alt="Free CSS, TailWind, HTML and React elements for web designers"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to="/buttons">
          <button className="bg-black h-[50px] text-sm font-semibold px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Buttons
          </button>
        </Link>
        <Link to="/sections">
          <button className="bg-black h-[50px] text-sm font-semibold px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Sections
          </button>
        </Link>
        <Link to="/pricing-tables">
          <button className="bg-black h-[50px] text-sm font-semibold px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Pricing Tables
          </button>
        </Link>        
      </div>
    </m.section>
    </>
  );
}
