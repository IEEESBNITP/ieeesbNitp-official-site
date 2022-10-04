import React from 'react'

function JoinIEEE() {
    return (
        <>
            <div className='dark:bg-gray-700 bg-white w-3/4 shadow-md  hover:shadow-2xl rounded-md ml-36'>
                <div className='flex'>
                    <img src='pngegg.png' className='p-1 h-96' alt='' />
                    <div className='mt-20'>
                        <h1 className='text-5xl dark:text-gray-400 text-gray-900 font-serif capitalize'>How to join IEEE</h1>
                        <ul className='list-inside list-disc dark:text-gray-500 '>
                            <li>Visit the <a href="https://www.ieee.org/membership/join/index.html" target={"_blank"} rel="noreferrer" className='hover:underline'>LINK</a></li>
                            <li>Browse and Click on Join IEEE</li>
                            <li>Select 'Create Account' in the pop-up menu that opens up</li>
                            <li>Fill up the required details</li>
                            <li>Proceed to make payment and confirm your IEEE membership</li>
                            <li>Congratulations you are now an IEEE member!!</li>
                            <li>And enjoy the Ieee membership benefits</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}

export default JoinIEEE