import { useState } from 'react'
import cssSectionsImg from '/css-and-tailwind-sections-hero.jpg'
import '../css/sections.css'

export default function Sections() {
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


  function handleShowCodeToggle():void {
    setShowButtonCode(!showButtonCode)
  }
  return(
    <>
    <section className="w-[100%] m-auto py-8 m-auto px-4 lg:px-16 xl:px-2 bg-rose-500 flex justify-center items-center text-white min-h-96">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-32 max-w-screen-xl items-center">
        <div>
          <h1 className="text-3xl md:text-5xl mb-12 font-bold text-left">Free CSS & TailWind Sections</h1>
          <p className="text-left text-xl text-white">Here are some CSS and Tailwind section templates to save you time in your front-end development.</p>
        </div>
        <div className="hidden md:block">
          <img src={cssSectionsImg} alt="CSS and Tailwind Sections" className="rounded-2xl shadow-2xl" />
        </div>
      </div>
    </section>
    <section className='flex flex-col gap-12 items-start justify-start min-h-96 m-auto w-[100%] max-w-screen-xl m-auto px-4 lg:px-16 xl:px-2'>
      <div className="flex flex-row flex-wrap items-center gap-4 md:gap-8 border-b-4 border-rose-500 pb-12 w-[100%]">
        <p className="font-bold text-xl">Filter:</p>
        <button onClick={filterCSS} className="transition-all duration-1000 relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          CSS Sections
          </span>
        </button>
        <button onClick={filterTailwind} className="transition-all duration-1000 relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Tailwind Sections
          </span>
        </button>
        <button onClick={filterAll} className="transition-all duration-1000 relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          All Sections
          </span>
        </button>
      </div>
      <section className={`${buttonFilter === 'CSS' || buttonFilter === 'All' ? 'flex flex-col gap-8 items-start w-[100%]' : 'hidden'}`}>
        <h2 className="font-bold text-3xl">CSS Sections</h2>
        <h3 className="font-bold text-2xl">Responsive Three Column Cards</h3>
        
        <section className="container">
          <div className="column">
            <img src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" className="column-img"/>
            <h2 className='h2'>Column Title 1</h2>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <button className="cta-button">Call to Action</button>
          </div>
          <div className="column">
            <img src="https://images.unsplash.com/photo-1543459176-4426b37223ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" className="column-img"/>
            <h2 className='h2'>Column Title 2</h2>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <button className="cta-button">Call to Action</button>
          </div>
          <div className="column">
            <img src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" className="column-img"/>
            <h2 className='h2'>Column Title 3</h2>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <button className="cta-button">Call to Action</button>
          </div>
        </section>

        <div className="flex flex-wrap justify-between flex-row gap-8 w-[100%] flex-wrap items-center">
        </div>
      </section>
      <section className={`${buttonFilter === 'Tailwind' || buttonFilter === 'All' ? 'flex flex-col gap-8 items-start w-[100%]' : 'hidden'}`}>
        <h2 className="font-bold text-3xl">Tailwind Sections</h2>
        <div className="flex flex-wrap justify-between flex-row gap-8 w-[100%] flex-wrap items-center">
        </div>
      </section>
    </section>    
    
    
    {/* Pop out with button code */}
    <div onClick={handleShowCodeToggle} className={`${!showButtonCode ? 'invisible opacity-0': 'opacity-50'} w-full h-full top-0 left-0 bg-gray-300 fixed duration-500 ease-out transition-all cursor-pointer z-20`}>
    </div>
    <section className={`${!showButtonCode ? 'translate-x-full': 'translate-x-0'} w-[100vw] sm:w-[50vw] h-full bg-white right-0 top-0 opacity-100 fixed duration-500 ease-out transition-all p-8 flex flex-col gap-4 justify-center items-start z-30 shadow-lg`}>
      
    </section>
    <div onClick={handleShowCodeToggle} className={`${!showButtonCode ? 'invisible opacity-0': 'opacity-100'} fixed cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 me-5 z-50 transition-all duration-1000`}>
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
    </>
  )
}