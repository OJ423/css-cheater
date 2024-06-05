import { useState } from "react";
import cssSectionsImg from "/css-and-tailwind-sections-hero.jpg";
import "../css/sections.css";
import { cssSections } from "../utils/sectionsUtils";
import SectionsDisplay from "./SectionsDisplay";
import SectionsTailwind from "./SectionsTailwind";
import {motion as m} from "framer-motion"

export default function Sections() {
  // Button Type Filter
  const [buttonFilter, setButtonFilter] = useState<string>("All");
  function filterCSS(): void {
    setButtonFilter("CSS");
  }
  function filterTailwind(): void {
    setButtonFilter("Tailwind");
  }
  function filterAll(): void {
    setButtonFilter("All");
  }

  return (
    <>
      <m.section
        key={'/sections-hero'}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1.5}}
        exit={{opacity:0}}
        className="w-[100%] m-auto py-8 m-auto px-4 lg:px-16 xl:px-2 bg-rose-500 flex justify-center items-center text-white min-h-96">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-32 max-w-screen-xl items-center">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl mb-12 font-bold text-left">
              Free CSS & Tailwind & React Sections
            </h1>
            <p className="text-left text-xl text-white">
              Here are some CSS and Tailwind/React section templates to save you time
              in your front-end development.
            </p>
          </div>
          <div className="hidden md:block md:flex-1">
            <img
              src={cssSectionsImg}
              alt="CSS and Tailwind Sections"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </m.section>
      <m.section
        key={'/sections-main'}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1.5}}
        exit={{opacity:0}}
        className="flex flex-col gap-4 md:gap-8 items-start justify-start min-h-96 m-auto w-[100%] m-auto px-4 lg:px-16 xl:px-2">
        <div className="flex flex-row flex-wrap items-center gap-4 md:gap-8 border-b-4 border-rose-500 pb-12 w-[100%] max-w-screen-xl m-auto">
          <p className="font-bold text-xl">Filter:</p>
          <button
            onClick={filterCSS}
            className="bg-black h-[50px] font-semibold text-sm px-4 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          >
              CSS Sections
          </button>
          <button
            onClick={filterTailwind}
            className="bg-black h-[50px] font-semibold text-sm px-4 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          >
              Tailwind Sections
          </button>
          <button
            onClick={filterAll}
            className="bg-black h-[50px] font-semibold text-sm px-4 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          >
              All Sections
          </button>
        </div>
        <section
          className={`${
            buttonFilter === "CSS" || buttonFilter === "All"
              ? "flex flex-col gap-8 items-start w-[100%]"
              : "hidden"
          }`}
        >
          <h2 className="font-bold text-3xl w-[100%] max-w-screen-xl m-auto text-left">
            CSS Sections
          </h2>
          <SectionsDisplay
            sectionName="Hero Section"
            cssSections={cssSections}
          />
          <SectionsDisplay
            sectionName="Responsive Three Column Cards"
            cssSections={cssSections}
          />
          <SectionsDisplay
            sectionName="CSS Footer Template"
            cssSections={cssSections}
          />
          <div className="flex flex-wrap justify-between flex-row gap-8 w-[100%] flex-wrap items-center"></div>
        </section>
        <section
          className={`${
            buttonFilter === "Tailwind" || buttonFilter === "All"
              ? "flex flex-col gap-8 items-start w-[100%]"
              : "hidden"
          }`}
        >
          <h2 className="font-bold text-3xl w-[100%] max-w-screen-xl m-auto text-left">
            Tailwind Sections
          </h2>
          <SectionsTailwind />
        </section>
      </m.section>
    </>
  );
}
