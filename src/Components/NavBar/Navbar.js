import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
//     const button = document.querySelector('#menu-button');
// const menu = document.querySelector('#menu');


// button.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
// });

    return (
        <>
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white dark:bg-gray-900">
                <div>
                    <Link to="/">
                        {/* <h1 className='font-medium text-2xl text-gray-400 hover:text-gray-300 '>IEEE SB</h1> */}
                        <img src="ieeelogo.png" alt="" className='w-20' />
                    </Link>
                </div>
                <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/events">Events</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/committee">Committee</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/membership">Membership</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-amber-600 text-purple-500" to="/login">Admin</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar