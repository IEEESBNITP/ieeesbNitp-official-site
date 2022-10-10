import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
    return (
        <>
            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className="">
                                <h1 className="my-2 text-amber-700 font-bold text-2xl">
                                    Looks like you've found the
                                    doorway to the great nothing
                                </h1>
                                <p className="my-2 text-amber-800">Sorry about that! Please visit our homepage to get where you need to go.</p>
                                <Link to="/"><button className="sm:w-full lg:w-auto my-2 border rounded-md py-4 px-6 text-center bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-opacity-50">Home Page</button></Link>
                            </div>
                        </div>
                        <div>
                            <img src="404.png" alt='' />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="Error.png" alt='' className='animate-pulse' />
                </div>
            </div>
        </>
    )
}

export default Error