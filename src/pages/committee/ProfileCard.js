import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
function ProfileCard() {
    return (
        <>
            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Rajan Kumar</h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">design director</p>

                <div class="flex mt-3 -mx-2">
                    <Link href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                        <FaLinkedin className='text-xl'/>
                    </Link>

                    <Link href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                        <FaInstagram className='text-xl'/>
                    </Link>

                    <Link href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                       <FaGithub className='text-xl'/>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default ProfileCard