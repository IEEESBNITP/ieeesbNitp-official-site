import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FiPhoneCall } from 'react-icons/fi'
function Footer() {
    return (
        <>
            <footer className="bg-white dark:bg-gray-900">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
                                <div className='w-28'>
                                    {/* <Link to="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">IEEE SB</Link> */}
                                    <Link to="/"><img src="ieeelogo.png" alt="" className='w-28' /></Link>
                                </div>

                                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                                <div className="flex mt-6 -mx-2">
                                    <Link href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-600"
                                        aria-label="Reddit">
                                        <FaInstagram className='text-2xl' />
                                    </Link>

                                    <Link href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-600"
                                        aria-label="Facebook">
                                        <FaLinkedin className='text-2xl' />
                                    </Link>

                                    <Link href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-600"
                                        aria-label="Github">
                                        <FaGithub className='text-2xl' />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                                    <Link to="/gallery" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Gallery</Link>
                                    <Link to="/contact" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Contact Us</Link>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</Link>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</Link>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</Link>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</Link>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"> <FiPhoneCall className='inline' /> +91 526 654 8965</span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"> <SiGmail className='inline' /> ieeeclub@nitp.ac.in</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                    <div>
                        <p className="text-center text-gray-500 dark:text-gray-400">© IEEE SB NITP 2020 - All rights reserved</p>
                        <div className='text-center'>
                             <span className='text-xs text-center text-gray-500'>Made with ❤️‍🔥</span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer