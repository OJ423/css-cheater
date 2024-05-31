import './App.css'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Buttons from './components/Buttons'
import Home from './components/Home'
import Footer from './components/Footer'
import Sections from './components/Sections'

function App() {

  return (
    <>
    <Navigation />
    <main className='flex flex-col gap-12 px-0 w-[100%]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/buttons' element={<Buttons/>} />
        <Route path='/sections' element={<Sections/>} />
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
