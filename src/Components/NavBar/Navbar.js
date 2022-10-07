import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase'
function Navbar() {
    // const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
    const localAuth = localStorage.getItem('ieee-auth');
    useEffect(() => {
        //for running the script to toggle the the navbar
        const script = document.createElement('script');
        script.src = "script.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white dark:bg-gray-900">
                <div>
                    <Link to="/">
                        <img src="ieeelogo.png" alt="" className='w-20' />
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
                    <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/events">Events</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/committee">Committee</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/certificate-download" title='Download certificate'>E-certificate</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/about">About</Link>
                        </li>
                        <li>
                            {(localAuth && auth ) ? <Link className="md:p-4 py-2 block hover:text-amber-600 text-purple-500" to="/dashboard">DashBoard</Link> : <Link className="md:p-4 py-2 block hover:text-amber-600 text-purple-500" to="/login">Admin</Link>}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar