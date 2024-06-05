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
import Thanks from './components/Thanks'
import { HelmetProvider } from 'react-helmet-async'

function App() {

  return (
    <>
    <Navigation />
    <main className='flex flex-col flex-1 content-stretch gap-12 px-0 w-[100%]'>
      <HelmetProvider>
        <Routes>
          <Route path='/' element={<>
              <Meta {...PageMeta('/')} />
              <Home/>
            </>}/>
          <Route path='/buttons' element={<>
            <Meta {...PageMeta('/buttons')} />
            <Buttons/>       
            </>} />
          <Route path='/sections' element={
            <>
              <Meta {...PageMeta('/sections')} />
              <Sections/>
            </>} />
          <Route path='/pricing-tables' element={
            <>
              <Meta {...PageMeta('/pricing-tables')} />
              <PricingTables/>
            </>
            } />
          <Route path='/thanks' element={
            <>
              <Meta {...PageMeta('/thanks')} />
              <Thanks />
            </>
            } />
        </Routes>
      </HelmetProvider>
    </main>
    <Footer/>
    </>
  )
}

export default App
