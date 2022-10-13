import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Firebase'
import { useParams } from 'react-router-dom'
function EventsDetails() {
  const [loader, setLoader] = useState(false);
  const [eventData, setEventData] = useState({});
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchEvent = async () => {
      setLoader(true);
      const docRef = doc(db, "events", id);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setEventData(docSnap.data());
          setLoader(false)
        } else {
          console.log("Document does not exist")
          setLoader(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // function to detect is any hyperlink is there in string/text description 
  const linkIfy = (text) => {
    let urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text?.replace(urlRegex, function (url) {
      return '<a style="color:#70B5F9;text-decoration:underline" className="hover:underline" href="' + url + '">' + url + '</a>';
    });
  }
  if (loader) {
    return <h1 className='text-center text-3xl text-rose-600'>Loading...</h1>
  }
  return (
    <>

      <div className="relative bg-white dark:bg-gray-800 p-4">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 md:pl-20">
            <h4 className="text-3xl leading-8 font-extrabold underline text-gray-900 dark:text-white tracking-tight sm:leading-9">
              {eventData?.name}
            </h4>
            <div>
              {<p dangerouslySetInnerHTML={{ __html: linkIfy(eventData?.desc) }} />}
              {/* {lorem} */}
            </div>
          </div>
          <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
            <img src={eventData?.imgPath} alt="illustration" className="relative mx-auto shadow-lg lg:w-[32rem] rounded w-auto" />
          </div>
        </div>
      </div>

    </>
  )
}

export default EventsDetails