import React from 'react'
import { useState } from 'react';
import { db, storage } from '../../Firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { addDoc, collection, } from "firebase/firestore";
function ListBlog() {
    const [loader, setLoader] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [link, setLink] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title !== "" && desc !== "" && link !== "" && date !== "") {
           //reference to events folder 
            try {
                setLoader(true);
                
                await addDoc(collection(db, 'blogs'), {
                    title: title,
                    desc: desc,
                    date: date,
                    link: link,
                });
                setLoader(false);
                setTitle("");
                setDesc("");
                setDate("");
                setLink("");
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
                <h1 className='text-xl text-center text-gray-50 font-serif py-5'>List New Upcoming Blogs</h1>
                <div className='md:p-20 px-5 py-2'>
                    <form>
                        <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog Title</label>
                            <input type="text" onChange={e => setTitle(e.target.value)} value={title} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                        </div>
                        <div>
                            <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                            <textarea id="desc" onChange={e => setDesc(e.target.value)} value={desc} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" />

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

export default ListBlog