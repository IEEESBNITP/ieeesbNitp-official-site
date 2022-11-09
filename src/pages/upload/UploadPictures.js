import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Firebase';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
function UploadPictures() {
    // if admin is not logged-in then redirect to login page 
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [files, setFiles] = useState();
    const [formData, setFormData] = useState({
        eventName: '',
        images: {}
    });
    const navigate = useNavigate();
    const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
    useEffect(() => { // if admin is not logged-in then redirect to login page 
        if (!(auth.currentUser && localAuth)) {
            navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const { eventName, images } = formData;
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault()
        console.log(files)

        // Store image in firebase
        const storeImage = async (image) => {
            return new Promise((resolve, reject) => {
                const storage = getStorage()
                const fileName = `${image.name}-${uuidv4()}` //${auth.currentUser.uid}-

                const storageRef = ref(storage, 'gallery/' + fileName)

                const uploadTask = uploadBytesResumable(storageRef, image)

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        console.log('Upload is ' + progress + '% done')
                        setProgress(progress)
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused')
                                break
                            case 'running':
                                console.log('Upload is running')
                                break
                            default:
                                break
                        }
                    },
                    (error) => {
                        reject(error)
                    },
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            resolve(downloadURL)
                        })
                    }
                )
            })
        }

        const imgUrls = await Promise.all(
            [...images].map((image) => storeImage(image))
        ).catch(() => {
            setLoading(false)
            // toast.error('Images not uploaded')
            console.log("Images not uploaded");
            return
        })
        // copying data 
        const formDataCopy = {
            ...formData,
            imgUrls,
            timestamp: serverTimestamp(),
        }
        const docRef = await addDoc(collection(db, 'gallery'), formDataCopy)
        console.log(docRef);
        setLoading(false)
    }
    const handleInput = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
            <section className='dark:bg-[#181F2A] py-12'>
                <div className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-900">
                        <div className="px-6 py-6 md:px-8 md:py-0">
                            <h1 className='text-2xl text-gray-400 dark:text-gray-500'><span className='text-amber-600'>Upload</span> The Images to the <span className='text-amber-600'>Gallery</span> </h1>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                        <form>
                            <div className='flex flex-col p-1.5 my-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                                <input type="text" className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent' name='eventName' placeholder='Event Name' value={formData.eventName} onChange={handleInput} />
                            </div>
                            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="file" name="roll" aria-label="" id='images' onChange={e => setFiles(e.target.files)} max='6' accept='.jpg,.png,.jpeg' multiple required />

                                <button type='submit' className="border shadow-xl hover:shadow-amber-500 border-amber-500 px-3 py-1 font-medium rounded-lg  text-amber-500 hover:bg-amber-500 hover:text-slate-900  text-lg" onClick={handleSubmit} >{loading ? progress : "Submit"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UploadPictures