import { useState } from "react"
import '../css/buttons.css'
import cssButtonsImg from '/css-and-tailwind-buttons-hero.jpg'
import { cssButton, cssButtons, tailwindButton, tailwindButtons } from "../utils/buttonsUtils"
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import htmlbars from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import {motion as m } from 'framer-motion'


SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('htmlbars', htmlbars);


export default function Buttons() {
  // Button Type Filter
  const [buttonFilter, setButtonFilter] = useState<string>('All')
  function filterCSS():void {
    setButtonFilter('CSS')
  }
  function filterTailwind():void {
    setButtonFilter('Tailwind')
  }
  function filterAll():void {
    setButtonFilter('All')
  }
  
  // Copy Buttons
  const [showButtonCode, setShowButtonCode] = useState<boolean>(false);
  const [cssButtonSelected, setCssButtonSelected] = useState<cssButton | null>(null);
  const [tailwindButtonSelected, setTailwindButtonSelected] = useState<tailwindButton | null>(null)
  const [buttonType, setButtonType] = useState<string>('CSS')

  function handleCSSButtonChoice(event: React.MouseEvent<HTMLButtonElement>):void {
    setButtonType('CSS')
    const buttonName = event.currentTarget.value;
    const selectedButton = cssButtons.find(button => button.buttonName === buttonName)
    if(selectedButton){ 
      setCssButtonSelected(selectedButton)
      setShowButtonCode(!showButtonCode)
      navigator.clipboard.writeText(`HTML:
${selectedButton.code.html}
CSS:
${selectedButton.code.css}`)
    }
  }

  function handleTailwindButtonChoice(event: React.MouseEvent<HTMLButtonElement>):void {
    setButtonType('Tailwind')
    const buttonName = event.currentTarget.value;
    const selectedButton = tailwindButtons.find(button => button.buttonName === buttonName);
    if(selectedButton){
      setTailwindButtonSelected(selectedButton)
      setShowButtonCode(!showButtonCode)
      navigator.clipboard.writeText(`${selectedButton.code}`)
    }
  }

  function handleShowCodeToggle():void {
    setShowButtonCode(!showButtonCode)
  }
  
  return (
    <>
    <m.section
      key={'/buttons-hero'}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration: 1.5}}
      exit={{opacity:0}}
      className="w-[100%] m-auto py-8 m-auto px-4 lg:px-16 xl:px-2 bg-rose-500 flex justify-center items-center text-white min-h-96">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-32 max-w-screen-xl items-center">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl mb-12 font-bold text-left">Free CSS & Tailwind Buttons</h1>
          <p className="text-left text-xl text-white">Here's a selection of CSS and Tailwind buttons that I like and are free for you to copy and use as you wish. Use the buttons to copy the code to your clipboard. Enjoy.</p>
        </div>
        <div className="hidden md:block md:flex-1">
          <img src={cssButtonsImg} alt="CSS and Tailwind Buttons" className="rounded-2xl shadow-2xl" />
        </div>
      </div>
    </m.section>
    <m.section
      key={'/buttons-main'}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration: 0.95, ease: "easeOut"}}
      className='flex flex-col gap-4 md:gap-8 items-start justify-start min-h-96 m-auto max-w-screen-xl m-auto px-4 lg:px-16 xl:px-2'>
      <div className="flex flex-row flex-wrap items-center gap-4 md:gap-8 border-b-4 border-rose-500 pb-12 w-[100%]">
        <p className="font-bold text-xl">Filter:</p>
        <button onClick={filterCSS} className="bg-black h-[50px] font-semibold text-sm px-4 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
          CSS Buttons
       </button>
        <button onClick={filterTailwind} className="bg-black h-[50px] font-semibold text-sm px-4 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
          Tailwind Buttons
       </button>
        <button onClick={filterAll} className="bg-black h-[50px] font-semibold text-sm px-4 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
          All Buttons
       </button>
      </div>
      <section className={`${buttonFilter === 'CSS' || buttonFilter === 'All' ? 'flex flex-col gap-8 items-start w-[100%]' : 'hidden'}`}>
        <h2 className="font-bold text-3xl">CSS buttons</h2>
        <div className="flex flex-wrap justify-between flex-row gap-8 w-[100%] flex-wrap items-center">
          <div>
            <button value={'Sliding Button'} onClick={handleCSSButtonChoice} className="btn-slide w-setButtonType('CSS')[100%] sm:w-
            auto">
              Sliding Button
            </button>
          </div>
          <div>
            <button value={'Button Strokes'} onClick={handleCSSButtonChoice} className="btn-strokes">
              Button Strokes
            </button>
          </div>
          <div>
            <button className="btn-rise" value={'Button Rise'} onClick={handleCSSButtonChoice}>
              Button Rise
            </button>
          </div>
          <div>
            <button className="btn-come-together" value={'Come Together'} onClick={handleCSSButtonChoice}>
              Come Together
            </button>
          </div>
          <div>
            <button className="blurry-button" value={'Blurry Button'} onClick={handleCSSButtonChoice}>
              Blurry Button
            </button>
          </div>
          <div>
            <button className="btn-pulse" value={'Pulse Button'} onClick={handleCSSButtonChoice}>
              Pulse Button
            </button>
          </div>
          <div>
            <button className="crosshatch-button" value={'Crosshatch Button'} onClick={handleCSSButtonChoice}>
              Crosshatch Button
            </button>
          </div>
          <div>
            <button className="btn-gradient-blur" value={'Gradient Blur'} onClick={handleCSSButtonChoice}>
              Gradient Blur
            </button>
          </div>
          <div>
            <button className="btn-rounded-shadow" value={'Rounded Shadow'} onClick={handleCSSButtonChoice}>
              Rounded Shadow
            </button>
          </div>
          <div>
            <button className="btn-color-crush" value={'Colour Crush'} onClick={handleCSSButtonChoice}>
              Colour Crush
            </button>
          </div>
          <div>
            <button className="btn-brackets" value={'Brackets Button'} onClick={handleCSSButtonChoice}>
              Button Brackets
            </button>
          </div>
        </div>
      </section>
      <section className={`${buttonFilter === 'Tailwind' || buttonFilter === 'All' ? 'flex flex-col gap-8 items-start w-[100%]' : 'hidden'}`}>
        <h2 className="font-bold text-3xl">Tailwind buttons</h2>
        <div className="flex flex-wrap justify-between flex-row gap-8 w-[100%] flex-wrap items-center">
          <div>
            <button value={'Pink Swipe'} onClick={handleTailwindButtonChoice}
              className="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
            >
              Pink Swipe
            </button>
          </div>
          <div>
            <button value={'Side Swipe'} onClick={handleTailwindButtonChoice} className="w-[150px] bg-black h-[50px] font-semibold text-sm my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
              Side Swipe
            </button>
          </div>
          <div>
            <button value={'Blink'} onClick={handleTailwindButtonChoice} className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
              <span className="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">Blink</span>
              <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
              <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>
              
                <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
            </button>
          </div>
          <div>
            <button value={'Border Grow'} onClick={handleTailwindButtonChoice} className="cursor-pointer uppercase bg-gray-100 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
              Border Grow
            </button>
          </div>
          <div>
            <button value={'Shrinking Scarlet'} onClick={handleTailwindButtonChoice} className="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
            hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent">
              Shrinking Scarlet
            </button>
          </div>
          <div>
            <button value={'Gradient Rise'} onClick={handleTailwindButtonChoice}
              className="w-36 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
            >
              Gradient Rise
            </button>
          </div>
          <div>
            <button value={'Pulsing Button'} onClick={handleTailwindButtonChoice} className="bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-650 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
              Pulsing Button
            </button>
          </div>
          <div>
            <button value={'Circle Zone'} onClick={handleTailwindButtonChoice} className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10">Circle Zone</p>
            </button>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button value={'Soft Colour Set'} onClick={handleTailwindButtonChoice} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-neutral-400 dark:hover:text-neutral-300">
              Soft Colour Set
            </button>
            <button value={'Soft Colour Set'} onClick={handleTailwindButtonChoice} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-teal-900 dark:text-teal-500 dark:hover:text-teal-400">
              Soft Colour Set
            </button>
            <button value={'Soft Colour Set'} onClick={handleTailwindButtonChoice} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
              Soft Colour Set
            </button>
            <button value={'Soft Colour Set'} onClick={handleTailwindButtonChoice} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400">
              Soft Colour Set
            </button>
            <button value={'Soft Colour Set'} onClick={handleTailwindButtonChoice} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400">
              Soft Colour Set
            </button>
          </div>
          <div>
            <button value={'Add to Cart'} onClick={handleTailwindButtonChoice} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Add to cart
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 11 4-7"></path>
                <path d="m19 11-4-7"></path>
                <path d="M2 11h20"></path>
                <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"></path>
                <path d="m9 11 1 9"></path>
                <path d="M4.5 15.5h15"></path>
                <path d="m15 11-1 9"></path>
              </svg>
            </button>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button value={'Subtle White Set'} onClick={handleTailwindButtonChoice} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm bg-white hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
              Subtle Set
            </button>
            <button value={'Subtle White Set'} onClick={handleTailwindButtonChoice}  type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
              Subtle Set
            </button>
            <button value={'Subtle White Set'} onClick={handleTailwindButtonChoice}  type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-teal-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
              Subtle Set
            </button>
            <button value={'Subtle White Set'} onClick={handleTailwindButtonChoice}  type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
              Subtle Set
            </button>
            <button value={'Subtle White Set'} onClick={handleTailwindButtonChoice}  type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
              Subtle Set
            </button>
            <button value={'Subtle White Set'} onClick={handleTailwindButtonChoice}  type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-yellow-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
              Subtle Set
            </button>
          </div>
        </div>
      </section>
    </m.section>
    {/* Pop out with button code */}
    <div onClick={handleShowCodeToggle} className={`${!showButtonCode ? 'invisible opacity-0': 'opacity-50'} w-full h-full top-0 left-0 bg-gray-300 fixed duration-500 ease-out transition-all cursor-pointer z-20`}>
    </div>
    <section className={`${!showButtonCode ? 'translate-x-full': 'translate-x-0'} w-[100vw] sm:w-[50vw] h-full bg-white right-0 top-0 opacity-100 fixed duration-500 ease-out transition-all p-8 flex flex-col gap-4 justify-center items-start z-50 shadow-lg`}>
      {buttonType === 'CSS' && cssButtonSelected ?
      <>
      <h2 className="font-bold text-3xl text-black text-left">{cssButtonSelected?.buttonName}</h2>
      <p className="text-black"><em>Code copied to the clipboard.</em></p>
      <h3 className="text-xl font-bold text-gray-500">HTML</h3>
      <SyntaxHighlighter className={'text-left w-[100%]'} language="htmlbars" style={docco}>
        {cssButtonSelected.code.html}
      </SyntaxHighlighter>
      <h3 className="text-xl font-bold text-gray-500">CSS</h3>
      <SyntaxHighlighter language="css" style={docco} wrapLongLines={true} className={'text-left w-[100%]'} >
        {cssButtonSelected.code.css}
      </SyntaxHighlighter>
      </>
      : buttonType === 'Tailwind' ?
      <>
      <h2 className="font-bold text-3xl text-black text-left">{tailwindButtonSelected?.buttonName}</h2>
      {tailwindButtonSelected ?
        <SyntaxHighlighter className={'text-left w-[100%]'} wrapLongLines={true} language="htmlbars" style={docco}>
        {tailwindButtonSelected.code}
      </SyntaxHighlighter>
      : null
      }
      
      </>
      : null
      }
    </section>
    <div onClick={handleShowCodeToggle} className={`${!showButtonCode ? 'invisible opacity-0': 'opacity-100'} fixed cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 me-5 z-50 transition-all duration-1000`}>
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
    </>
  )
}