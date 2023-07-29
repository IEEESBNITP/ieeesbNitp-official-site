import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
function Footer() {
    return (
        <>

            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 sm:w-1/3">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-amber-600">IEEE SB NIT PATNA</span>
                        <p>National Institute of Technology Patna
                            Patna, Bihar (800005), India</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">

                                <li className="mb-4">
                                    <Link to="/events" className="">Events</Link>
                                </li>
                                <li>
                                    <Link to="/gallery" className="">Gallery</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://github.com/IEEESBNITP" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Others</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link to="/contact" className="">Contact Us</Link>
                                </li>
                                <li className='mb-4'>
                                    <a href="/" className="hover:underline">Projects</a>
                                </li>
                                <li>
                                    <a href="https://ieeesbnitp.netlify.app/#/" >Old Website</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">IEEE</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="my-2">
                                    <a href="https://www.ieee.org/about/index.html" className="uppercase">About IEEE</a>
                                </li>
                                <li className="my-2">
                                    <a href="https://www.ieee.org/membership/renew.html" className="uppercase">IEEE Renew</a>
                                </li>
                                <li className="my-2">
                                    <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="uppercase">IEEE xplore</a>
                                </li>
                                <li className="my-2">
                                    <a href="https://www.ieee.org/membership/index.html" className="uppercase">IEEE Membership</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to="/" className="">IEEE SB NITP</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 dark:text-gray-300">
                        <a href="https://www.facebook.com/ieee.nitp/" className=" hover:text-gray-900 dark:hover:text-white">
                            <FaFacebook className='text-xl hover:text-amber-600' />
                        </a>
                        <a href="https://www.instagram.com/ieee_nitp/?hl=en" className=" hover:text-gray-900 dark:hover:text-white">
                            <FaInstagram className='text-xl hover:text-amber-600' />
                        </a>
                        <a href="https://www.linkedin.com/company/ieee-sb-nitp/" className="hover:text-gray-900 dark:hover:text-white">
                            <FaLinkedin className='text-xl hover:text-amber-600' />
                        </a>
                        <a href="https://github.com/IEEESBNITP" className=" hover:text-gray-900 dark:hover:text-white">
                            <FaGithub className='text-xl hover:text-amber-600' />
                        </a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
