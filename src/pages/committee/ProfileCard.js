import React, { useState } from 'react'
import { auth, storage } from '../../Firebase';
import { GiCrossedSabres } from 'react-icons/gi';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FiEdit } from 'react-icons/fi'
import { AiFillDelete } from 'react-icons/ai'
import { db } from '../../Firebase'
import { ref, deleteObject } from 'firebase/storage'
function ProfileCard({ data, id }) {
    const [member, setMember] = useState({
        name: data?.name,
        position: data?.position,
        year: data?.year,
        branch: data?.branch,
        insta: data?.insta,
        email: data?.email,
        linkedin: data?.linkedin
    })
    const [showModal, setShowModal] = useState(false);
    const year = parseInt(data.year);  //@important converting the year string into number 
    const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
    const deleteMember = async (id) => { //function for delete the member and their details as well. OP
        try {
            const yes = window.confirm("Confirm Do you want to delete?")
            if (yes) {
                await deleteObject(ref(storage, data.forDeletePath)); //deleting the image of member // data.imgPath
                await deleteDoc(doc(db, `com${year}${year + 1}`, id)); //deleting the data of member 
                alert("Deleted")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const editDetails = () => { // show and hid details/modal
        setShowModal(!showModal)
    }
    const handleInputs = (e) => { //this function will handle the input
        let name, value;
        name = e.target.name;
        value = e.target.value;
        setMember({ ...member, [name]: value })
    }
    const updateDetails = async () => { //function for updating the details of member
        const { name, position, year, branch, insta, email, linkedin } = member;
        try {
            const yes = window.confirm("Confirm do you want to update?")
            if (yes) {
                const ref = doc(db, `com${year}${parseInt(year) + 1}`, id); // parseInt convert the string into int so we can add +1 
                await updateDoc(ref, { name, position, year, branch, insta, email, linkedin }); // updating the doc
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border-2 cursor-pointer rounded-xl border-amber-500 hover:border-transparent group  hover:shadow-xl dark:border-gray-700 dark:hover:border-transparent">
                {(auth.currentUser && localAuth) ? (<>
                    <button><FiEdit className='absolute top-2 right-2 text-xl hover:text-amber-600' onClick={editDetails} /></button>
                    <button><AiFillDelete className='absolute top-2 right-8 text-xl hover:text-amber-600' onClick={e => deleteMember(id)} /></button>
                </>) : null}
                <img className="object-cover w-36 h-36 rounded-full ring-2 ring-amber-600 " src={data.imgPath} alt="profile-img" loading="lazy" />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-gray-500">{data.name}</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-400">{data.position}</p>

                <div className="flex mt-3 -mx-2">
                    <a href={data.linkedin} target="_blank" rel='noreferrer' className="mx-2 text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-gray-300 group-hover:text-amber-600" aria-label="Reddit">
                        <FaLinkedin className='text-xl' />
                    </a>

                    <a href={data.insta} target="_blank" rel='noreferrer' className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-amber-600" aria-label="Facebook">
                        <FaInstagram className='text-xl' />
                    </a>

                    <a href={`mailto:${data.email}`} target="_blank" rel='noreferrer' className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-amber-600" aria-label="Github">
                        <SiGmail className='text-xl' />
                    </a>
                </div>
            </div>
            {showModal ? (<>
                <div className=' overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'>

                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <form>
                                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {data.name}
                                    </h3>
                                    <button type="button" onClick={editDetails} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal" >
                                        <GiCrossedSabres className='text-amber-600 text-lg' />
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <div className='px-5'>
                                    <div>
                                        <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Name</label>
                                        <input type="text" name='name' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            value={member.name} onChange={handleInputs}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="position" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Position</label>
                                        <input type="text" name='position' id='position' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            value={member.position} onChange={handleInputs}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="branch" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Branch</label>
                                        <input type="text" name='branch' id='branch' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='B.TECH CSE - 2K20 BATCH'
                                            value={member.branch} onChange={handleInputs}

                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="year" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Year</label>
                                        <input type="text" name='year' id='year' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            value={member.year} onChange={handleInputs}

                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="file" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Image</label>
                                        <input type="file" name='file' id='file' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                                    </div>
                                    <div className='sm:flex'>
                                        <div>
                                            <label htmlFor="linkedin" className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Linkedin: </label>
                                            <input type="text" name='linkedin' id='linkedin' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                value={member.linkedin} onChange={handleInputs} placeholder="Linkedin Url"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="insta" className='mb-2 md:ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Instagram: </label>
                                            <input type="text" name='insta' id='insta' className='bg-gray-50 border md:ml-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                value={member.insta} onChange={handleInputs} placeholder="Instagram Url"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className='mb-2 text-sm md:ml-4 font-medium text-gray-900 dark:text-gray-300'>Email: </label>
                                            <input type="email" name='email' id='email' className='bg-gray-50 md:ml-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                value={member.email} onChange={handleInputs} placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Modal footer --> */}
                                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                    <button data-modal-toggle="defaultModal" type="button" className="tailwind-btn" onClick={updateDetails}>I accept</button>
                                    <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-amber-600 rounded-lg border border-amber-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-amber-600 dark:border-amber-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={editDetails}>Decline</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </>) : null}

        </>
    )
}

export default ProfileCard