import { useState } from "react";
import cssPricingTables from "/css-and-tailwind-pricing-tables-hero.jpg";
import "../css/sections.css";
import { cssSections } from "../utils/sectionsUtils";
import SectionsDisplay from "./SectionsDisplay";
import SectionsTailwind from "./SectionsTailwind";


export default function PricingTables() {
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
  
    // Copy Buttons
    const [showButtonCode, setShowButtonCode] = useState<boolean>(false);
  
    function handleShowCodeToggle(): void {
      setShowButtonCode(!showButtonCode);
    }
    return (
      <>
        <section className="w-[100%] m-auto py-8 m-auto px-4 lg:px-16 xl:px-2 bg-rose-500 flex justify-center items-center text-white min-h-96">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-32 max-w-screen-xl items-center">
            <div>
              <h1 className="text-3xl md:text-5xl mb-12 font-bold text-left">
                Free CSS & Tailwind & React Pricing Tables
              </h1>
              <p className="text-left text-xl text-white">
                Pricing tables can be a pain in the backside. Here's a couple for you to use and tweak for your designs.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src={cssPricingTables}
                alt="CSS and Tailwind Sections"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-12 items-start justify-start min-h-96 m-auto w-[100%] m-auto px-4 lg:px-16 xl:px-2">
          <div className="flex flex-row flex-wrap items-center gap-4 md:gap-8 border-b-4 border-rose-500 pb-12 w-[100%] max-w-screen-xl m-auto">
            <p className="font-bold text-xl">Filter:</p>
            <button
              onClick={filterCSS}
              className="bg-black h-[50px] my-3 px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
            >
                CSS Pricing Tables
            </button>
            <button
              onClick={filterTailwind}
              className="bg-black h-[50px] my-3 px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
            >
                Tailwind Pricing Tables
            </button>
            <button
              onClick={filterAll}
              className="bg-black h-[50px] my-3 px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
            >
                All Pricing Tables
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
        </section>
  
        {/* Pop out with button code */}
        <div
          onClick={handleShowCodeToggle}
          className={`${
            !showButtonCode ? "invisible opacity-0" : "opacity-50"
          } w-full h-full top-0 left-0 bg-gray-300 fixed duration-500 ease-out transition-all cursor-pointer z-20`}
        ></div>
        <section
          className={`${
            !showButtonCode ? "translate-x-full" : "translate-x-0"
          } w-[100vw] sm:w-[50vw] h-full bg-white right-0 top-0 opacity-100 fixed duration-500 ease-out transition-all p-8 flex flex-col gap-4 justify-center items-start z-30 shadow-lg`}
        ></section>
        <div
          onClick={handleShowCodeToggle}
          className={`${
            !showButtonCode ? "invisible opacity-0" : "opacity-100"
          } fixed cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 me-5 z-50 transition-all duration-1000`}
        >
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </>
    );
  }