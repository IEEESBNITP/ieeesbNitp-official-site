import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../../Firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { addDoc, collection, } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function UploadCertificates() {
    const [loader, setLoader] = useState(false);
    const [certificateNo, setCertificateNo] = useState('');
    const [date, setDate] = useState("");
    const [eventName, setEventName] = useState('');
    const [file, setFile] = useState();
    const navigate = useNavigate();
    const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
    useEffect(() => { // if admin is not logged-in then redirect to login page 
        if (!(auth.currentUser && localAuth)) {
            navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (certificateNo !== "" && eventName !== "" && file !== "" && date !== "") {
            //reference to events folder 
            const imgRef = ref(storage, `certificates/${new Date().getTime()} - ${file.name}`)
            try {
                setLoader(true);
                const snap = await uploadBytes(imgRef, file);
                // url of the picture after uploading
                const url = await getDownloadURL(ref(storage, snap.ref.fullPath))
                setFile();
                await addDoc(collection(db, 'certificates'), {
                    certificateNo: certificateNo,
                    date: date,
                    event: eventName,
                    imgPath: file ? url : null,
                    forDeletePath: file ? snap.ref.fullPath : null,
                });
                setLoader(false);
                setCertificateNo("");
                setEventName("");
                toast.success("Uploaded successfully")
            } catch (error) {
                setLoader(false);
                toast.error("Something went wrong")
                console.log(error);
            }
        } else {
            toast.error("Enter Valid Inputs")
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
                                        <label htmlFor="certificate_no" className="leading-7 text-sm text-gray-600">CertificateNo Number</label>
                                        <input type="text" id="certificate_no" name="certificate_no" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={certificateNo} onChange={e => setCertificateNo(e.target.value)} placeholder="certificateNo Number" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="Event_Name" className="leading-7 text-sm text-gray-600">Event Name</label>
                                        <input type="text" id="Event_Name" name="Event_Name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={eventName} onChange={e => setEventName(e.target.value)} placeholder="Event Name" />
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