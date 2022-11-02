import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import JoinIEEE from './JoinIEEE'
import Updates from './Updates'
function Home() {
  return (
    <>
      <div className='dark:bg-[#181F2A] bg-gray-100 text-gray-900'>
        <div className=''>

          <div className='grid lg:h-screen place-items-center'>
            <video autoPlay loop muted>
              <source src="Computer.mp4" type="video/mp4" />
            </video>
            <h1 className='lg:text-6xl text-xl text-gray-300 font-serif font-medium absolute lg:top-1/2'>IEEE SB NIT PATNA</h1>
          </div>
        </div>
        <div className='mt-10 lg:mt-60 lg:ml-52'>
          <div className="grid lg:grid-cols-2 text-gray-900 dark:text-gray-400">

            <div className="card md:w-96 m-1">
              <figure><img src="people.png" className='w-full' alt="Work Together" loading='lazy' /></figure>
              <div className="card-body">
                <h2 className="text-center font-medium text-2xl text-amber-600">Work Together!</h2>
                <p className='text-center font-extralight'>Talent wins games, but teamwork and intelligence win championships.</p>

              </div>
            </div>
            <div className="card md:w-96  m-1">
              <figure><img src="innovation.png" className='w-full' alt="Be Innovative" /></figure>
              <div className="card-body">
                <h2 className=" text-center font-medium text-2xl text-amber-600">Be Innovative</h2>
                <p className='text-center font-extralight'>Don’t live the same day over and over again and call that a life. Life is about evolving mentally, spiritually, and emotionally</p>
              </div>
            </div>
            <div className="card md:w-96  m-1">
              <figure><img src="rocket.png" className='w-full' alt="Think High" loading='lazy' /></figure>
              <div className="card-body">
                <h2 className="text-center font-medium text-2xl text-amber-600">Think High</h2>
                <p className='text-center font-extralight'>Your comfort zone is a place where you keep yourself in a self-illusion and nothing can grow there but your potentiality can grow only when you can think and grow out of that zone.</p>

              </div>
            </div>
            <div className="card md:w-96 m-1 mt-20">
              <figure><img src="home.png" className='w-full' alt="Keep Learning" loading='lazy' /></figure>
              <div className="card-body">
                <h2 className="text-center font-medium text-2xl text-amber-600">Keep Learning</h2>
                <p className='text-center font-extralight'>Mind is a fertile land and the crop depends on what you sow and how you nurture</p>

              </div>
            </div>

          </div>
        </div>
        <div className='lg:flex py-14'>
          <div>
            <img src="illustration-stay-productive.png" className='md:w-3/4 px-14 py-10 md:ml-10' alt="Productivity" loading='lazy' />
          </div>
          <div className='lg:w-3/5'>
            <div className='lg:py-20 px-7'>
              <h1 className='lg:text-4xl  font-medium text-left text-gray-900 dark:text-gray-400'>IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity</h1>
              <a href='https://www.ieee.org/' target="_blank" rel="noreferrer" className='flex font-serif font-medium underline text-amber-600 hover:text-gray-300 cursor-pointer w-28'>Know More <BsArrowRightCircleFill className='m-1' /> </a>
            </div>
          </div>
        </div>
        <div className=''>
          {/* Join ieee component */}
          <JoinIEEE />
        </div>
        {/* Updates Component which render last  3 events  */}
        <Updates />

      </div>
    </>
  )
}

export default Home