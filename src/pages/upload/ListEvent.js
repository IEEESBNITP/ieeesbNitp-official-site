import React from 'react'
import { useState } from 'react';
import { db, storage } from '../../Firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { addDoc, collection, } from "firebase/firestore";
function ListEvent() {
    const [loader, setLoader] = useState(false);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [file, setFile] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (name !== "" && desc !== "" && file !== "" && date !== "") {
           //reference to events folder 
            const imgRef = ref(storage, `events/${new Date().getTime()} - ${file.name}`)
            try {
                setLoader(true);
                const snap = await uploadBytes(imgRef, file);
                // url of the picture after uploading
                const url = await getDownloadURL(ref(storage, snap.ref.fullPath))
                setFile();
                await addDoc(collection(db, 'events'), {
                    name: name,
                    desc: desc,
                    date: date,
                    imgPath: file ? url : null,
                    forDeletePath: file ? snap.ref.fullPath : null,

                });
                setLoader(false);
                setName("");
                setDesc("");
                setDate("");
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Enter Valid Inputs");
        }
    }

    return (
        <>
            <div className="dark:bg-[#181F2A]">
                <h1 className='text-xl text-center text-gray-50 font-serif py-5'>List New Upcoming Event</h1>
                <div className='md:p-20 px-5 py-2'>
                    <form>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Event Name</label>
                            <input type="text" onChange={e => setName(e.target.value)} value={name} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                        </div>
                        <div>
                            <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                            <textarea id="desc" onChange={e => setDesc(e.target.value)} value={desc} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" />

                        </div>
                        <div>
                            <label htmlFor="poster" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your File</label>
                            <div className="flex justify-center items-center w-full">
                                <label htmlFor="file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                        <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="file" onChange={e => setFile(e.target.files[0])}  accept="image/*" type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Date</label>
                            <input type="date" onChange={e => setDate(e.target.value)} value={date} id="date" className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white dark:bg-gray-700 dark:text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0' />
                        </div>
                        <div>
                            <button
                                className="mt-5 tailwind-btn w-full" onClick={handleSubmit} type="submit">
                                {!loader ? "List" : "Listing..."}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ListEvent