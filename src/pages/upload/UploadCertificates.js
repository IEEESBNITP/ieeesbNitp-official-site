import React, { useState } from 'react'
import { db, storage } from '../../Firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { addDoc, collection, } from "firebase/firestore";
function UploadCertificates() {
    const [loader, setLoader] = useState(false);
    const [roll, setRoll] = useState('');
    const [date, setDate] = useState("");
    const [eventName, setEventName] = useState('');
    const [file, setFile] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (roll !== "" && eventName !== "" && file !== "" && date !=="") {
            //reference to events folder 
            const imgRef = ref(storage, `certificates/${new Date().getTime()} - ${file.name}`)
            try {
                setLoader(true);
                const snap = await uploadBytes(imgRef, file);
                // url of the picture after uploading
                const url = await getDownloadURL(ref(storage, snap.ref.fullPath))
                setFile();
                await addDoc(collection(db, 'certificates'), {
                    roll: roll,
                    date: date,
                    event: eventName,
                    imgPath: file ? url : null,
                    forDeletePath: file ? snap.ref.fullPath : null,

                });
                setLoader(false);
                setRoll("");
                setEventName("");
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Enter Valid Inputs");
        }
    }
    return (
        <>
            <section className="text-gray-600 body-font relative bg-white dark:bg-[#181F2A]">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase font-serif dark:text-gray-400">Upload Certificates</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">Upload the certificate of the event </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Roll Number</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={roll} onChange={e => setRoll(e.target.value)} placeholder="Roll Number" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Event Name</label>
                                        <input type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={eventName} onChange={e => setEventName(e.target.value)} placeholder="Event Name" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="date" className="leading-7 text-sm text-gray-600">Upload Image</label>
                                        <input type="date" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={date} onChange={e => setDate(e.target.value)} />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="file" className="leading-7 text-sm text-gray-600">Upload Image</label>
                                        <input type="file" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={e => setFile(e.target.files[0])} accept="image/*" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto tailwind-btn" type='submit' onClick={handleSubmit}>{!loader ? "Upload" : "Uploading..."}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UploadCertificates