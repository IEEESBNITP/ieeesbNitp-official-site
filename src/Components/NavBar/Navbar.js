import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase'
function Navbar() {
    const navigate = useNavigate();
    // const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
    const localAuth = localStorage.getItem('ieee-auth');
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white dark:bg-slate-900 font-serif shadow-lg dark:shadow-sm">
                <div>
                    <Link to="/">
                        <img src="ieeeLogo.png" alt="Logo" className='w-20 h-10 light-hide' loading='lazy' />
                        <img src="ieeeLogoBlack.png" alt="" className='w-20 h-10 dark-hide ' loading='lazy' />
                    </Link>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menu-button"
                    className="h-6 w-6 cursor-pointer md:hidden block"
                    fill="none"
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul className="pt-4 text-base text-gray-900 dark:text-gray-400 md:flex md:justify-between md:pt-0">
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/events">Events</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/committee">Committee</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/certificate-download" title='Download certificate'>E-Certificate</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <a href="https://www.ieee.org/membership/join/index.html" target={"_blank"} rel="noreferrer" className="md:p-4 py-2 block hover:text-amber-600">Join IEEE</a>
                        </li>
                        <li>
                            {(localAuth && auth) ? (<Link className="md:p-3 mt-1 block hover:text-amber-600 py-3 pr-4 md:pl-3  md:hover:bg-transparent md:border dark:text-amber-500 md:hover:text-amber-500 dark:hover:text-amber md:dark:hover:bg-transparent md:text-amber-500 font-serif md:bg-amber-600 md:bg-opacity-20 border-amber-500 md:hover:bg-opacity-10  rounded" to="/dashboard">Dashboard</Link>) : (<Link className="md:p-3 mt-1 block hover:text-amber-600 py-3 pr-4 md:pl-3  md:hover:bg-transparent md:border dark:text-amber-500 md:hover:text-amber-500 dark:hover:text-amber md:dark:hover:bg-transparent md:text-amber-500 font-serif md:bg-amber-600 md:bg-opacity-20 border-amber-500 md:hover:bg-opacity-10  rounded" to="/login">Admin</Link>)}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar