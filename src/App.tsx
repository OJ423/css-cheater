import './App.css'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Buttons from './components/Buttons'
import Home from './components/Home'
import Footer from './components/Footer'
import Sections from './components/Sections'
import PricingTables from './components/PricingTables'
import Meta from './components/Meta'
import PageMeta from './components/PageMeta'
import  {AnimatePresence} from 'framer-motion'

function App() {

  return (
    <>
    <Navigation />
    <main className='flex flex-col flex-1 content-stretch gap-12 px-0 w-[100%]'>
      <Routes>
        <Route path='/' element={<>
          <AnimatePresence initial={false} mode={"wait"}>
            <Meta {...PageMeta('/')} />
            <Home/>
          </AnimatePresence>
          </>}/>
        <Route path='/buttons' element={<>
        <AnimatePresence mode={"wait"}>
          <Meta {...PageMeta('/buttons')} />
          <Buttons/>        
        </AnimatePresence>
          </>} />
        <Route path='/sections' element={
          <>
          <AnimatePresence mode={"wait"}>
            <Meta {...PageMeta('/sections')} />
            <Sections/>
          </AnimatePresence>
          </>} />
        <Route path='/pricing-tables' element={
          <>
          <AnimatePresence mode={"wait"}>
            <Meta {...PageMeta('/pricing-tables')} />
            <PricingTables/>
          </AnimatePresence>
          </>
          } />
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
