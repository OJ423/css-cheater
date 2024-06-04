import {motion as m} from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Thanks() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
      className="w-[100%] py-20 flex flex-col flex-1 gap-8 justify-center items-center bg-gradient-to-tl from-rose-100 to-teal-100 -mb-16">
      <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl'>Thanks to...</h1>
      <p className="font-medium sm:text-lg">Some things I created, some things I borrowed. Here's a list of websites I wanted to thank.</p>
      <div className='flex gap-8 flex-wrap justify-between items-stretch max-w-screen-lg'>
        <div className='border-2 border-rose-500 p-4 rounded-xl flex flex-col justify-between gap-4 flex-1'>
          <h2 className='font-bold'>Unsplash</h2>
          <p className='text-sm'>The best place (IMO) for free images on the Internet.</p>
          <div>
            <Link className='bg-rose-500 hover:bg-gray-800 transition-all duration-500 text-xs inline-block p-4 rounded-xl text-white font-semibold' to='https://unsplash.com/' target='_blank'>Unsplash.com</Link>
          </div>
        </div>
        <div className='border-2 border-rose-500 p-4 rounded-xl flex flex-col justify-between gap-4 flex-1'>
          <h2 className='font-bold'>CSS Scan</h2>
          <p className='text-sm'>Relatively new to me this one, but a good source of CSS elements for web design.</p>
          <div>
            <Link className='bg-rose-500 hover:bg-gray-800 transition-all duration-500 text-xs inline-block p-4 rounded-xl text-white font-semibold' to='https://getcssscan.com/' target='_blank'>getcssscan.com</Link>
          </div>
        </div>
        <div className='border-2 border-rose-500 p-4 rounded-xl flex flex-col justify-between gap-4 flex-1'>
          <h2 className='font-bold'>TailwindFlex</h2>
          <p className='text-sm'>Community contributed Tailwind components with lots to choose from.</p>
          <div>
            <Link className='bg-rose-500 hover:bg-gray-800 transition-all duration-500 text-xs inline-block p-4 rounded-xl text-white font-semibold' to='https://tailwindflex.com/' target='_blank'>tailwindflex.com</Link>
          </div>
        </div>
        <div className='border-2 border-rose-500 p-4 rounded-xl flex flex-col justify-between gap-4 flex-1'>
          <h2 className='font-bold'>Flowbite</h2>
          <p className='text-sm'>I didn't actually use anything from Flowbite, but they have some good free examples (and some paid ones too).</p>
          <div>
            <Link className='bg-rose-500 hover:bg-gray-800 transition-all duration-500 text-xs inline-block p-4 rounded-xl text-white font-semibold' to='https://flowbite.com/' target='_blank'>flowbite.com</Link>
          </div>
        </div>
        <div className='border-2 border-rose-500 p-4 rounded-xl flex flex-col justify-between gap-4 flex-1'>
          <h2 className='font-bold'>W3Schools</h2>
          <p className='text-sm'>Again, I didn't use this resource, but it's great for seeing examples and getting ideas.</p>
          <div>
            <Link className='bg-rose-500 hover:bg-gray-800 transition-all duration-500 text-xs inline-block p-4 rounded-xl text-white font-semibold' to='https://www.w3schools.com/' target='_blank'>w3schools.com</Link>
          </div>
        </div>
        <div className='border-2 border-rose-500 p-4 rounded-xl flex flex-col justify-between gap-4 flex-1'>
          <h2 className='font-bold'>SVG Repo</h2>
          <p className='text-sm'>A community powered repo of SVGs. This one is new to me, but it looks great.</p>
          <div>
            <Link className='bg-rose-500 hover:bg-gray-800 transition-all duration-500 text-xs inline-block p-4 rounded-xl text-white font-semibold' to='https://www.svgrepo.com/' target='_blank'>svgrepo.com</Link>
          </div>
        </div>
        <div className='border-2 border-rose-500 p-4 rounded-xl flex flex-col justify-between gap-4 flex-1'>
          <h2 className='font-bold'>Hero Icons</h2>
          <p className='text-sm'>Steve Schoger has put this fab collection of SVGs together. Very useful.</p>
          <div>
            <Link className='bg-rose-500 hover:bg-gray-800 transition-all duration-500 text-xs inline-block p-4 rounded-xl text-white font-semibold' to='https://heroicons.dev/' target='_blank'>heroicons.dev</Link>
          </div>
        </div>
        <div className='border-2 border-rose-500 p-4 rounded-xl flex flex-col justify-between gap-4 flex-1'>
          <h2 className='font-bold'>Facebook Devices</h2>
          <p className='text-sm'>Download a ton of device pictures to create mockups of your apps.</p>
          <div>
            <Link className='bg-rose-500 hover:bg-gray-800 transition-all duration-500 text-xs inline-block p-4 rounded-xl text-white font-semibold' to='https://design.facebook.com/toolsandresources/devices/' target='_blank'>design.facebook.com</Link>
          </div>
        </div>
        <div className='border-2 border-rose-500 p-4 rounded-xl flex flex-col justify-between gap-4 flex-1'>
          <h2 className='font-bold'>Pixabay</h2>
          <p className='text-sm'>I've not used this site for here, but have done in the past for free videos, pics and more.</p>
          <div>
            <Link className='bg-rose-500 hover:bg-gray-800 transition-all duration-500 text-xs inline-block p-4 rounded-xl text-white font-semibold' to='https://pixabay.com/' target='_blank'>pixabay.com</Link>
          </div>
        </div>
      </div>
    </m.section>
  )
}