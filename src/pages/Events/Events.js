import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { useEffect, useState } from "react";
import EventElements from "./EventElement";
import { getDocs, query, collection, orderBy, limit } from "firebase/firestore";
import SimpleLoader from '../PageLoader/SimpleLoader'
import { db } from "../../Firebase";
import { BsPlusLg } from 'react-icons/bs'
export const Events = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [noOfEvents, setNoOfEvents] = useState(5)
  const fetchEvents = async () => {
    try {
      setLoading(true);
      // Get reference
      const eventRef = collection(db, "events");

      // Create a query
      const q = query(
        eventRef,
        orderBy('date', 'desc'),
        limit(noOfEvents)
      );
      // Execute query
      const querySnap = await getDocs(q);

      // const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      const allEvents = [];

      querySnap.forEach((doc) => {
        return allEvents.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setEvents(allEvents);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchMoreEvents = async () => {
    try {
      // setLoading(true);
      // Get reference
      const eventRef = collection(db, "events");

      // Create a query
      const q = query(
        eventRef,
        orderBy('date', 'desc'),
        limit(parseInt(noOfEvents) + 5)
      );
      // Execute query
      const querySnap = await getDocs(q);

      // const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      const allEvents = [];

      querySnap.forEach((doc) => {
        return allEvents.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setEvents(allEvents);
      setNoOfEvents(parseInt(noOfEvents) + 5);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  if (loading) {
    return <SimpleLoader />
  }
  return (
    <>
      <VerticalTimeline lineColor="#D97706" >
        {events.map((item) => {
          return <EventElements key={item.id} data={item.data} id={item.id} />;
        })}
      </VerticalTimeline>
      <div className="lg:flex justify-center">
        <button onClick={fetchMoreEvents} className="bg-amber-600 md:ml-4 lg:ml-0 p-4 rounded-full text-xl ring-4 ring-white text-white shadow-xl"><BsPlusLg /></button>
      </div>
    </>
  );
};

export default Events;
