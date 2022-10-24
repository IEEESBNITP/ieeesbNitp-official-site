import React from 'react'

function UploadPictures() {

    return (
        <>
            <section className='dark:bg-[#181F2A] py-12'>
                <div className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-900">
                        <div className="px-6 py-6 md:px-8 md:py-0">
                            <h1 className='text-2xl text-gray-400 dark:text-gray-500'><span className='text-amber-600'>Upload</span> The Images to the <span className='text-amber-600'>Gallery</span> </h1>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                        <form>
                            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="file" name="roll" aria-label="Enter your Roll" />

                                <button type='submit' className="border shadow-xl hover:shadow-amber-500 border-amber-500 px-3 py-1 font-medium rounded-lg  text-amber-500 hover:bg-amber-500 hover:text-slate-900  text-lg" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UploadPictures