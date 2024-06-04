import { Link } from 'react-router-dom'
import cssCheaterWhiteLogo from '/css-cheater-white-logo.svg'
import { IoLogoLinkedin, IoLogoGithub, IoLogoChrome } from "react-icons/io5";


export default function Footer() {
  return(
    <footer className="min-h-96 bg-rose-500 mt-16 py-16 px-8 sm:px-16">
      <section className='max-w-screen-xl m-auto text-gray-800 flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 box-border '>
          <div className='min-w-32 md:min-w-44'>
            <Link to={'/'}>
              <img src={cssCheaterWhiteLogo} className='w-44'/>
            </Link>
            <div className='flex gap-4 pt-4 mt-4 w-[100%] border-t-2 border-solid border-white'>
              <Link to={'https://ukmarketingfreelancer.co.uk/'}>
                <IoLogoChrome className='text-white h-8 w-8 hover:text-gray-800 transition-all duration-500' />
              </Link>
              <Link to={'https://www.linkedin.com/in/oliver-smith-software'}>
                <IoLogoLinkedin className='text-white h-8 w-8 hover:text-gray-800 transition-all duration-500' />
              </Link>
              <Link to={'https://github.com/OJ423/'}>
                <IoLogoGithub className='text-white h-8 w-8 hover:text-gray-800 transition-all duration-500' />
              </Link>
            </div>
          </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16'>
          <div className='col-span-2'>
            <h2 className='text-white font-bold text-xl text-left mb-4'>I'm looking for work</h2>
            <p className='text-white font-light text-left'>Hi, I'm Oliver and I'm relatively new to the software development world and I'm looking for work. If you're looking for someone who is hardworking, creative, can work without supervision, is a quick learner, and works well in a team, then I'd be a good choice. Check out my socials and get in touch if you're interested in me.</p>
          </div>
          <div className='col-span-1 gap-4 flex flex-row md:flex-col w-auto items-end'>
            <Link to={'/buttons'}>
              <p className='font-bold text-left text-white hover:text-gray-800 transition-all duration-500 inline-flex'>Buttons</p>
            </Link>
            <Link to={'/sections'}>
              <p className='font-bold text-left text-white pt-2 md:border-t-2 md:border-white mt-2 hover:text-gray-800 transition-all duration-500 inline-flex'>Sections</p>
            </Link>
            <Link to={'/pricing-tables'}>
              <p className='font-bold text-left text-white pt-2 md:border-t-2 md:border-white mt-2 hover:text-gray-800 transition-all duration-500 inline-flex'>Pricing Tables</p>
            </Link>
            <Link to={'/thanks'}>
              <p className='font-bold text-left text-white pt-2 md:border-t-2 md:border-white mt-2 hover:text-gray-800 transition-all duration-500 inline-flex'>Thanks</p>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  )
}