import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase'
import { Link } from 'react-router-dom'
import {
    collection,
    getDocs,
    query,
    orderBy,
    limit,
} from 'firebase/firestore'
function Updates() {
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);
    const fetchEvents = async () => {
        try {
            // Get reference
            setLoading(true)
            const eventRef = collection(db, 'events')

            // Create a query
            const q = query(
                eventRef,

                orderBy('date', 'desc'),
                limit(3)
            )
            // Execute query
            const querySnap = await getDocs(q)

            // const lastVisible = querySnap.docs[querySnap.docs.length - 1]
            const event = []

            querySnap.forEach((doc) => {
                return event.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })
            setEvents(event);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchEvents();
    }, [])
    if (loading) {
        return <h1>Loading</h1>
    }
    return (
        <section className="pb-20 dark:bg-[#181F2A]  mt-5">
            <div className="container mx-auto px-10">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 md:px-10  text-center">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl w-full mb-8 rounded-lg border-b border-amber-500"
                        >
                            <div className="flex-auto">
                                <Link to={`/events/${events[0]?.id}`}>
                                    <img src={events[0]?.data?.imgPath} alt="" />
                                </Link>
                                <h6 className="text-xl font-semibold">{events[0]?.data?.name}</h6>
                                <p className="mt-2 mb-4 text-gray-400">
                                    {events[0]?.data?.desc.slice(0, 105) + "..."}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 md:px-10 text-center ">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-8 shadow-lg hover:shadow-2xl rounded-lg border-b border-amber-500"
                        >
                            <div className=" flex-auto">
                                <Link to={`/events/${events[1]?.id}`}>
                                    <img src={events[1]?.data?.imgPath} alt="" title='See full details' />
                                </Link>
                                <h6 className="text-xl font-semibold">{events[1]?.data?.name}</h6>
                                <p className="mt-2 mb-4 text-gray-400">
                                    {events[1]?.data?.desc.slice(0, 105) + "..."}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 md:px-10 text-center">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-8 shadow-lg hover:shadow-2xl rounded-lg border-b border-amber-500"
                        >
                            <div className="flex-auto">
                                <Link to={`/events/${events[2]?.id}`}>
                                    <img src={events[2]?.data?.imgPath} alt="" />
                                </Link>
                                <h6 className="text-xl font-semibold">{events[2]?.data?.name}</h6>
                                <p className="mt-2 mb-4 text-gray-400">
                                    {events[2]?.data?.desc.slice(0, 105) + "..."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Updates