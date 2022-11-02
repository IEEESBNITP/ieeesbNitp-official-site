import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { useEffect, useState } from "react";
import EventElements from "./EventElement";
import { doc, getDocs, query, collection } from "firebase/firestore";
// import SimpleLoader from '../PageLoader/SimpleLoader'
import { db } from "../../Firebase";
import { useParams } from "react-router-dom";

export const Events = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      // Get reference
      setLoading(true);
      const eventRef = collection(db, "events");

      // Create a query
      const q = query(
        eventRef

        // orderBy('date', 'desc'),
        // limit(3)
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
      console.log(allEvents);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <VerticalTimeline>
      {events.map((item) => {
        return <EventElements key={item.id} data={item.data} />;
      })}
    </VerticalTimeline>
  );
};

export default Events;
