import { useState } from "react";
import cssPricingTablesImg from "/css-and-tailwind-pricing-tables-hero.jpg";
import "../css/pricing-table.css";
import { cssPricingTables } from "../utils/pricingTableUtils";
import SectionsDisplay from "./SectionsDisplay";
import PricingTablesTW from "./PricingTablesTW";
import { motion as m } from "framer-motion";

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

  return (
    <>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0 }}
        className="w-[100%] m-auto py-8 m-auto px-4 lg:px-16 xl:px-2 bg-rose-500 flex justify-center items-center text-white min-h-96"
      >
        <div className="flex flex-col md:flex-row gap-8 lg:gap-32 max-w-screen-xl items-center">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl mb-12 font-bold text-left">
              Free CSS & Tailwind & React Pricing Tables
            </h1>
            <p className="text-left text-xl text-white">
              Pricing tables can be a pain in the backside. Here's a couple for
              you to use and tweak for your designs.
            </p>
          </div>
          <div className="hidden md:block md:flex-1">
            <img
              src={cssPricingTablesImg}
              alt="CSS and Tailwind Sections"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </m.section>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0 }}
        className="flex flex-col gap-4 md:gap-8 items-start justify-start min-h-96 m-auto w-[100%] m-auto px-4 lg:px-16 xl:px-2"
      >
        <div className="flex flex-row flex-wrap items-center gap-4 md:gap-8 border-b-4 border-rose-500 pb-12 w-[100%] max-w-screen-xl m-auto">
          <p className="font-bold text-xl">Filter:</p>
          <button
            onClick={filterCSS}
            className="bg-black h-[50px] font-semibold text-sm my-3 px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          >
            CSS Pricing Tables
          </button>
          <button
            onClick={filterTailwind}
            className="bg-black h-[50px] font-semibold text-sm my-3 px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          >
            Tailwind Pricing Tables
          </button>
          <button
            onClick={filterAll}
            className="bg-black h-[50px] font-semibold text-sm my-3 px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
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
            CSS Pricing Table
          </h2>
          <SectionsDisplay
            sectionName="CSS Floating Pricing Table"
            cssSections={cssPricingTables}
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
            Tailwind & React Pricing Table
          </h2>
          <PricingTablesTW />
        </section>
      </m.section>
    </>
  );
}
