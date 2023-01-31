import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify';
import { auth, storage, db } from '../../Firebase';
import Loader from '../PageLoader/SimpleLoader'
function ImageCard({ data ,fetchImages}) {
    const [loader, setLoader] = useState(false);
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
    if(loader){
        return <Loader />
    }
    return (
        <>
            <div className="rounded overflow-hidden relative">
                {(auth?.currentUser && localAuth) ? <>
                    <button onClick={() => deleteImage(data?.url)} className="absolute top-2 right-2 bg-[#181F2A] rounded-full p-1.5 "><MdDelete className='hover:text-amber-600 text-xl' /></button>
                </> : null}
                <img className="" src={data?.url} alt="gallery" loading='lazy' />
            </div>


        </>
    )
}

export default ImageCard