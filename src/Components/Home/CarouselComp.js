import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
    collection,
    getDocs,
    query,
    orderBy,
    limit,
} from 'firebase/firestore'
import SimpleLoader from '../../pages/PageLoader/SimpleLoader'
import { db } from "../../Firebase";
import { HiArrowCircleRight, HiArrowCircleLeft } from 'react-icons/hi'
import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';
function CarouselComp() {
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
            setLoading(false)
            console.log(error);
        }
    }
    useEffect(() => {
        fetchEvents();
    }, [])
    if (loading) {
        return <SimpleLoader />
    }

    const breakPoints = [
        { width: 640, itemsToShow: 1 },
        { width: 768, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1024, itemsToShow: 3 },
        // { width: 1200, itemsToShow: 4 }
    ];
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <HiArrowCircleLeft className="text-amber-600 text-xl lg:hidden" /> : <HiArrowCircleRight className="text-amber-600 text-xl  lg:hidden" />
        return (
            <button onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }
    return (
        <>
            <div className="container mx-auto mt-10">
                <Carousel breakPoints={breakPoints} easing="cubic-bezier(1,.15,.55,1.54)" tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)" transitionMs={1000} showArrows={true} renderArrow={myArrow} enableSwipe={true} enableMouseSwipe={true} enableAutoPlay={false} focusOnSelect={true}>
                    {events?.map((item) => <div key={item.id}><Card data={item?.data} id={item?.id} /></div>)}
                </Carousel>
            </div>
        </>
    );
}

export default CarouselComp;