import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
function Home() {
    return (
        <>  <div className='bg-[#181F2A] '>
            <div className=''>

                <div className='grid h-screen place-items-center'>
                    <video autoPlay loop muted>
                        <source src="Computer.mp4"  type="video/mp4" />
                    </video>
                    <h1 className='text-6xl text-gray-300 font-serif font-medium absolute top-1/2'>IEEE SB NIT PATNA</h1>
                </div>
            </div>
            <div className='flex py-14'>
                <div>
                    <img src="illustration-stay-productive.png" className='w-3/4 px-14 py-10 md:ml-10' alt="" />
                </div>
                <div className='w-3/5'>
                    <div className='py-20'>

                        <h1 className='text-4xl  font-medium text-left text-gray-300'>IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity</h1>
                        <p className='flex font-serif font-medium underline text-[#5DD8D3] hover:text-gray-300 cursor-pointer'>Know More <BsArrowRightCircleFill className='m-1' /> </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home