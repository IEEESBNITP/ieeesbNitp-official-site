import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
function Home() {
    return (
        <>  <div className='bg-[#181F2A] '>
            <div className=''>

                <div className='grid h-screen place-items-center'>
                    <video autoPlay loop muted>
                        <source src="Computer.mp4" type="video/mp4" />
                    </video>
                    <h1 className='text-6xl text-gray-300 font-serif font-medium absolute top-1/2'>IEEE SB NIT PATNA</h1>
                </div>
            </div>
            <div className='mt-60 ml-60'>
                <div className="grid grid-cols-2 text-gray-400">

                    <div className="card w-96 bg-[#181F2A] m-1">
                        <figure><img src="people.png" className='w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center font-medium text-2xl">Work Together!</h2>
                            <p className='text-center font-extralight'>Talent wins games, but teamwork and intelligence win championships.</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-[#181F2A] m-1">
                        <figure><img src="innovation.png" className='w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center font-medium text-2xl">Be Innovative</h2>
                            <p className='text-center font-extralight'>Don’t live the same day over and over again and call that a life. Life is about evolving mentally, spiritually, and emotionally</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-[#181F2A] m-1">
                        <figure><img src="rocket.png" className='w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center font-medium text-2xl">Think High</h2>
                            <p className='text-center font-extralight'>Your comfort zone is a place where you keep yourself in a self-illusion and nothing can grow there but your potentiality can grow only when you can think and grow out of that zone.</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-[#181F2A] m-1">
                        <figure><img src="home.png" className='w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center font-medium text-2xl">Keep Learning</h2>
                            <p className='text-center font-extralight'>Mind is a fertile land and the crop depends on what you sow and how you nurture</p>

                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='flex py-14'>
                <div>
                    <img src="illustration-stay-productive.png" className='w-3/4 px-14 py-10 md:ml-10' alt="" />
                </div>
                <div className='w-3/5'>
                    <div className='py-20'>
                        <h1 className='text-4xl  font-medium text-left text-gray-300'>IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity</h1>
                        <span className='flex font-serif font-medium underline text-[#5DD8D3] hover:text-gray-300 cursor-pointer w-28'>Know More <BsArrowRightCircleFill className='m-1' /> </span>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='bg-gray-700 w-3/4 shadow-md  hover:shadow-2xl rounded-md ml-36'>
                    <div className='flex'>

                        <img src='pngegg.png' className='p-1 h-96' alt='' />
                        <h1 className='text-5xl text-gray-400 font-serif grid place-items-center capitalize'>The future is here...</h1>
                    </div>

                </div>
            </div>

        </div>
        </>
    )
}

export default Home