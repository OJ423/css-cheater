import { NavLink } from 'react-router-dom'
import cssCheaterLogo from '/css-cheater-logo.svg'
import { useState } from 'react'

export default function Navigation() {
  const [navOpen, setNavOpen] = useState<boolean>(false)
  function handleMenuOpen():void {
    setNavOpen(!navOpen) 
  }
  return (
    <header className='w-[100%] bg-white py-4 shadow-2xl z-50'>
      <section className='flex flex-row justify-between px-4 xl:p-0 start-0 items-center w-[100%] max-w-screen-xl mx-auto'>
        <NavLink to='/'>
          <img src={cssCheaterLogo} className='w-40' alt="CSS Cheater Logo" />
        </NavLink>
        <button onClick={handleMenuOpen}>
          <svg className={`${navOpen? 'mt-[-10px] h-8':'h-8'}`}  fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" className={`${navOpen ? 'rotate-45 origin-left transition-all duration-500':'transition-all duration-500'}`} strokeLinejoin="round" d="M3.75 6.75h16.5" />
            <path strokeLinecap="round" className={`${navOpen ? '-rotate-45 origin-right transition-all duration-500':'transition-all duration-500'}`} strokeLinejoin="round" d="M3.75 6.75h16.5" />
            <path strokeLinecap="round" className={`${navOpen ? 'opacity-0 transition-all duration-500':'transition-all duration-500 opacity-100'}`}strokeLinejoin="round" d="M3.75 12h16.5" />
            <path strokeLinecap="round" className={`${navOpen ? 'opacity-0 transition-all duration-500':'opactiy-100 transition-all duration-500'}`} strokeLinejoin="round" d="M3.75 17.25h16.5" />
          </svg>
        </button>
      <div onClick={handleMenuOpen} className={`${!navOpen ? 'invisible opacity-0': 'opacity-50'} w-full h-full top-0 left-0 bg-gray-300 fixed duration-500 ease-out transition-all cursor-pointer z-20`}>
      </div>
      <section className={`${!navOpen ? 'translate-x-[-100%]': 'translate-x-0'} w-[60vw] sm:w-[30vw] h-full bg-white left-0 top-0 opacity-100 fixed duration-500 ease-out transition-all p-8 flex flex-col gap-12 justify-center text-center items-center z-40 shadow-lg items-center`}>
        <NavLink to="/">
          <img onClick={handleMenuOpen} src={cssCheaterLogo} className='w-40' alt="CSS Cheater Logo"/>
        </NavLink>
        <ul className="text-left">
          <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
            <li onClick={handleMenuOpen} className="list-style-none font-bold text-lg mb-4 flex gap-4 justify-start items-center cursor-pointer hover:text-gray-400 duration-500 ease-out transition-all">
              Home
            </li>
          </NavLink>
          <NavLink to="/buttons" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
            <li onClick={handleMenuOpen} className="list-style-none font-bold text-lg mb-4 flex gap-4 justify-start items-center cursor-pointer hover:text-gray-400 duration-500 ease-out transition-all">
              Buttons
            </li>
          </NavLink>
          <NavLink to="/sections" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
            <li onClick={handleMenuOpen} className="list-style-none font-bold text-lg mb-4 flex gap-4 justify-start items-center cursor-pointer hover:text-gray-400 duration-500 ease-out transition-all">
              Sections
            </li>
          </NavLink>
          <NavLink to="/pricing-tables" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
            <li onClick={handleMenuOpen} className="list-style-none font-bold text-lg mb-4 flex gap-4 justify-start items-center cursor-pointer hover:text-gray-400 duration-500 ease-out transition-all">
              Pricing Tables
            </li>
          </NavLink>
          <NavLink to="/thanks" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
            <li onClick={handleMenuOpen} className="list-style-none font-bold text-lg mb-4 flex gap-4 justify-start items-center cursor-pointer hover:text-gray-400 duration-500 ease-out transition-all">
              Thanks To
            </li>
          </NavLink>
        </ul>

      </section>
      <div onClick={handleMenuOpen} className={`${!navOpen ? 'invisible opacity-0': 'opacity-100'} fixed cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center left-0 mt-5 ml-5 z-50 transition-all duration-1000`}>
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </div>
      </section>
    </header>
  )
}