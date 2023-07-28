import React, { useState, useEffect } from 'react'
import ProfileCard from './ProfileCard'
import { db } from '../../Firebase'
import {
    collection,
    getDocs,
    orderBy,
    query,
} from 'firebase/firestore'
import SimpleLoader from '../PageLoader/SimpleLoader';
import { toast } from 'react-toastify';
function Committee() {
    const [loading, setLoading] = useState(false);
    const [year, setYear] = useState('com20232024');
    const [committee, setCommittee] = useState([]);
    const fetchCommittee = async () => {
        try {
            // Get reference
            setLoading(true)
            const eventRef = collection(db, year)

            // Create a query
            const q = query(
                eventRef,
                orderBy('timeStamp'), /*here you can say fcfs is working first come first 
                 serve things are automatically orderBy ascending order no need of mention ascending descending */
            )
            // Execute query
            const querySnap = await getDocs(q)

            const event = []

            querySnap.forEach((doc) => {
                return event.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })
            setCommittee(event);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
            toast.error("Something went wrong try later...")
        }
    }

    useEffect(() => {
        fetchCommittee();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year])
    if (loading) {
        // return <PageLoader/>
        return <SimpleLoader />
    }
    return (
        <>
            <section className="bg-white dark:bg-[#181F2A]">
                <div className='text-center'>
                    <h1 className='pt-2 font-serif'>PROFESSOR-IN-CHARGE</h1>
                    <div className='hero container max-w-screen-lg mx-auto flex justify-center pt-5 px-3 md:px-0'>
                        <img src="P.I.jpeg" className='w-1/2 lg:w-1/5 rounded-full ring-1 ring-amber-600' alt="prof.Incharge" loading="lazy" />
                    </div>
                    <div className='text-center'>
                        <span className='my-1 text-amber-500 font-medium'>Dr. Subodh Srivastava </span>
                    </div>
                    <div>
                        <p className='text-gray-400 px-6 py-3 text-justify text-sm'>Dr.Subodh Srivastava is working as an Assistant Professor in the Department of Electronics and Communications Engineering, NIT Patna, Bihar, India. He has 06+ years of post-PhD teaching experience. He has 45+ publications in reputed journals and conferences. 06 Book chapters to his credit. He is a member of the IEEE, and is also connected with Indian Society of Technical Education through life time member. He received his PhD from IIT(BHU) in 2014. His research interests include image processing, biomedical image analysis, pattern recognition, machine learning, computer vision, and their medical applications. Currently, he is the professor In-charge of IEEE Student Branch, NIT Patna.</p>
                    </div>
                </div>
                <div className='p-5'>
                    <label htmlFor="cars" className='text-gray-400'>Year </label>
                    <select name="year" id="year" className='bg-amber-600 rounded px-5 py-1 text-white' value={year} onChange={e => setYear(e.target.value)}>
                        <option value="com20232024">2023</option>
                        <option value="com20222023">2022</option>
                        <option value="com20212022">2021</option>
                        <option value="com20202021">2020</option>
                        <option value="com20192020">2019</option>
                        <option value="com20182019">2018</option>
                    </select>
                </div>
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>

                    <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                        Teams are incredible things. No task is too great, no accomplishment too grand, no dream too far-fetched for a team. It takes teamwork to make the dream work.
                    </p>
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                        {committee.map((item) => {
                            return <ProfileCard key={item.id} id={item.id} data={item.data} fetchCommittee={fetchCommittee} />
                        })}
                    </div>
                </div>
                {/* <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Executive Mentors</h1>

                    <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                        Teams are incredible things. No task is too great, no accomplishment too grand, no dream too far-fetched for a team. It takes teamwork to make the dream work.
                    </p>
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                        
                    </div>
                </div> */}
            </section>
        </>
    )
}

export default Committee