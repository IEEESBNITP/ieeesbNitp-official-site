import React, { useState, useEffect } from 'react'
import ProfileCard from './ProfileCard'
import { db } from '../../Firebase'
import {
    collection,
    getDocs,
    query,
    // orderBy,
    // limit,
} from 'firebase/firestore'
// import PageLoader from '../PageLoader/PageLoader';
function Committee() {
    const [loading, setLoading] = useState(false);
    const [year, setYear] = useState('com20222023');
    const [committee, setCommittee] = useState([]);
    const fetchCommittee = async () => {
        try {
            // Get reference
            setLoading(true)
            const eventRef = collection(db, year)

            // Create a query
            const q = query(
                eventRef,
                // orderBy('date', 'desc'), // we can prioritize the things later 
                // limit(3)
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
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCommittee();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year])
    if (loading) {
        // return <PageLoader/>
        return <h1>Loading...</h1>
    }
    return (
        <>
            <section className="bg-white dark:bg-[#181F2A]">
                <div className=''>
                    <label htmlFor="cars" className='text-gray-400'>Year </label>
                    <select name="year" id="year" className='bg-amber-600 rounded px-5 py-1 text-white' value={year} onChange={e => setYear(e.target.value)}>
                        <option value="com20222023">2022</option>
                        <option value="com20212022">2021</option>
                        <option value="com20202021">2020</option>
                        <option value="com20192020">2019</option>
                    </select>
                </div>
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>

                    <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p>
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                        {committee.map((item) => {
                            return <ProfileCard key={item.id} data={item.data} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Committee