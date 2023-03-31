import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import { toast } from 'react-toastify';
import { auth, storage, db } from '../../Firebase';
import Loader from '../PageLoader/SimpleLoader'
function ImageCard({ data, fetchImages, setBlur, blur }) {
    const [loader, setLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
    const deleteImage = async (url) => {
        try {
            const yes = window.confirm("Confirm Do you want to delete?")
            if (yes) {
                setLoader(true);
                const year = parseInt(data?.year);
                const arrayRef = doc(db, `gallery${year}`, data.docId) //ref to doc 
                await deleteObject(ref(storage, url)); //deleting the image from storage 
                await updateDoc(arrayRef, {
                    imgUrls: arrayRemove(url)   // removing that url from imgUrls array
                });
                toast.success("Deleted Successfully")
                setLoader(false)
                fetchImages() // reloading the page after the deletion 
            }
        } catch (error) {
            console.log(error);
            setLoader(false)
            toast.error("Something went wrong...")
        }
    }
    if (loader) {
        return <Loader />
    }
    const showAndHideModal = () => {
        if (window.screen.width > 450) {
            setShowModal(!showModal)
            setBlur(!blur)
        }
    }
    return (
        <>
            <div className={`rounded overflow-hidden relative ${blur ? 'blur-md' : ""}`}>
                {(auth?.currentUser && localAuth) ? <>
                    <button onClick={() => deleteImage(data?.url)} className="absolute top-2 right-2 bg-[#181F2A] rounded-full p-1.5 "><MdDelete className='hover:text-amber-600 text-xl' /></button>
                </> : null}
                <img className="w-full h-full" src={data?.url} alt={data?.eventName} title="Click to view" loading='lazy' htmlFor="my-modal-4" onClick={showAndHideModal} />
                <div className='absolute bottom-2 left-2'>
                    <h1 className='bg-[#181F2A] rounded px-1.5 text-amber-500 font-serif shadow-2xl'>{data?.eventName}</h1>
                </div>
            </div>
            {showModal ? (<>
                <div className='overflow-y-auto overflow-x-hidden fixed md:top-32 md:left-1/4 z-50 md:w-full md:inset-0  md:h-full'>
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <button onClick={showAndHideModal} className="absolute z-50 top-2 right-2 bg-[#181F2A] rounded-full p-1.5 "><ImCross className='hover:text-amber-600 text-xl' /></button>
                        <div className="relative">
                            <img src={data?.url} alt="" className='w-full rounded border-4 border-double border-amber-600' />
                            <div className='absolute bottom-2 left-2'>
                                <h1 className='bg-[#181F2A] rounded px-1.5 text-amber-500 font-serif shadow-2xl'>{data?.eventName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>) : null}
        </>
    )
}

export default ImageCard