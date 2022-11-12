import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../../Firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { addDoc, collection, } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function UploadExcom() {
    const [loader, setLoader] = useState(false);
    const [file, setFile] = useState();
    const [member, setMember] = useState({
        name: '',
        position: '',
        year: '',
        branch: '',
        insta: '',
        email: '',
        linkedin: ''
    })
    const navigate = useNavigate();
    const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
    useEffect(() => {
        // if admin is not logedin then redirect to login page 
        if (!(auth.currentUser && localAuth)) {
            navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleInputs = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        setMember({ ...member, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, position, year, branch, insta, email, linkedin } = member;
        // @important ->> year input we have taken so that we can specify which year Ecom actually it is.
        if (name !== "" && email !== "" && file !== "" && year !== "") {
            const neeYear = parseInt(year) //converting string to int 
            //reference to events folder 
            const imgRef = ref(storage, `com${neeYear}${neeYear + 1}/${new Date().getTime()} - ${file.name}`)
            try {
                setLoader(true);
                const snap = await uploadBytes(imgRef, file);
                // url of the picture after uploading
                const url = await getDownloadURL(ref(storage, snap.ref.fullPath))
                setFile();
                await addDoc(collection(db, `com${neeYear}${neeYear + 1}`), {
                    name: name,
                    position: position,
                    email: email,
                    year: year,
                    branch: branch,
                    insta: insta,
                    linkedin: linkedin,
                    imgPath: file ? url : null,
                    forDeletePath: file ? snap.ref.fullPath : null,

                });
                setLoader(false);
                setMember({
                    ...member,
                    position: '',
                    name: '',
                    email: '',
                    year: '',
                    branch: '',
                    insta: '',
                    linkedin: '',
                })
                toast.success("Uploaded successfully")
            } catch (error) {
                toast.error("Something went wrong");
                setLoader(false);
                console.log(error);
            }
        } else {
            toast.error("Enter Valid Inputs");
        }
    }
    return (
        <>
            <div>
                <div className='lg:px-96 md:px-64'>
                    <div>
                        <h1 className='text-center text-2xl p-2 underline decoration-amber-600'>Executive Member</h1>
                    </div>
                    <form >
                        <div>
                            <div>
                                <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Name</label>
                                <input type="text" name='name' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='Name' value={member.name} onChange={handleInputs}
                                />
                            </div>
                            <div>
                                <label htmlFor="position" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Position</label>
                                <input type="text" name='position' id='position' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='Position' value={member.position} onChange={handleInputs}
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
                                    placeholder='year' value={member.year} onChange={handleInputs}

                                />
                            </div>
                            <div>
                                <label htmlFor="file" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Image</label>
                                <input type="file" name='file' id='file' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={e => setFile(e.target.files[0])} />
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
                            <div className='my-1'>
                                <button className="tailwind-btn" type='submit' onClick={handleSubmit}>{loader ? "Upload" : "Submit"}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UploadExcom;