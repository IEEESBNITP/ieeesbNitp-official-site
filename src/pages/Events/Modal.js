import React, { useState } from 'react'
import { GiCrossedSabres } from "react-icons/gi"
import SimpleLoader from '../PageLoader/SimpleLoader';
import { doc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { storage, db } from '../../Firebase';
function Modal({ eventData, setShowModal, fetchEvent, id }) {
    // console.log(eventData.forDeletePath);
    const [file, setFile] = useState();
    const [loader, setLoader] = useState(false);
    const [modalData, setModalData] = useState({
        name: eventData?.name,
        desc: eventData?.desc,
        date: eventData?.date,
    });
    const handleInputs = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        setModalData({ ...modalData, [name]: value })
    }
    const updateDetails = async () => {
        const { name, desc, date } = modalData;
        try {
            const yes = window.confirm("Confirm do you want to update?")  //confirmation
            if (yes) {
                if (file) { // if file is true then we have to change the profile-img also but first of all delete the previous one
                    setLoader(true)
                    await deleteObject(ref(storage, eventData.forDeletePath)); //deleting the image of member // eventData.imgPath
                    const imgRef = ref(storage, `events/${new Date().getTime()} - ${file.name}`)
                    const snap = await uploadBytes(imgRef, file);
                    // url of the picture after uploading
                    const url = await getDownloadURL(ref(storage, snap.ref.fullPath))
                    setFile();
                    const docRef = doc(db, 'events', id); // parseInt convert the string into int so we can add +1 
                    await updateDoc(docRef, { name, desc, date, imgPath: file ? url : eventData?.imgPath, forDeletePath: file ? snap.ref.fullPath : eventData?.forDeletePath, }); // updating the doc
                    setShowModal(false);
                    setFile();
                    setLoader(false)
                    fetchEvent() // calling fetchEvent so that changes can render or reflect automatically
                } else {
                    setLoader(true);
                    const docRef = doc(db, 'events', id); // parseInt convert the string into int so we can add +1 
                    await updateDoc(docRef, { name, desc, date }); // updating the doc
                    setShowModal(false);
                    setFile();
                    setLoader(false);
                    fetchEvent(); // calling fetchEvent so that changes can render or reflect automatically 
                }
            }
        } catch (error) {
            setLoader(false);
            console.log(error)
        }

    }
    return (
        <>
            <div className=' overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'>

                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <form>
                            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {modalData?.name}
                                </h3>
                                <button type="button" onClick={e => setShowModal(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal" >
                                    <GiCrossedSabres className='text-amber-600 text-lg' />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* {/* <!-- Modal body --> */}
                            <div className="px-5">
                                <div>
                                    <label htmlFor="eventName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Event Name</label>
                                    <input type="text" onChange={handleInputs} value={modalData?.name} id="eventName" name='eventName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                                </div>
                                <div>
                                    <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                                    <textarea id="desc" onChange={handleInputs} name="desc" value={modalData?.desc} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" />

                                </div>
                                <div>
                                    <label htmlFor="poster" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your File</label>
                                    <div className="flex justify-center items-center w-full">
                                        <label htmlFor="file" className="flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="file" name='file' onChange={e => setFile(e.target.files[0])} accept="image/*" type="file" className="hidden" />
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Date</label>
                                    <input type="date" onChange={handleInputs} value={modalData?.date} name="date" id="date" className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white dark:bg-gray-700 dark:text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0' />
                                </div>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button data-modal-toggle="defaultModal" type="button" className="tailwind-btn" onClick={updateDetails}>{loader ? <SimpleLoader /> : "Update"}</button>
                                <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-amber-600 rounded-lg border border-amber-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-amber-600 dark:border-amber-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={e => setShowModal(false)}>Decline</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Modal