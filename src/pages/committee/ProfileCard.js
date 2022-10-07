import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
function ProfileCard({data}) {
    return (
        <>
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={data.imgPath} alt="" />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{data.name}</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{data.position}</p>

                <div className="flex mt-3 -mx-2">
                    <a href={data.linkedin} target="_blank" rel='noreferrer' className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                        <FaLinkedin className='text-xl'/>
                    </a>

                    <a href={data.insta} target="_blank" rel='noreferrer' className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                        <FaInstagram className='text-xl'/>
                    </a>

                    <a href={`mailto:${data.email}`} target="_blank" rel='noreferrer' className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                       <FaGithub className='text-xl'/>
                    </a>
                </div>
            </div>

        </>
    )
}

export default ProfileCard