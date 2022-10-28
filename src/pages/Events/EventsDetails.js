import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import SimpleLoader from '../PageLoader/SimpleLoader'
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

  if (loader) {
    return <SimpleLoader />
  }
  return (
    <>
      <div className="relative bg-white dark:bg-gray-800 p-4">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 md:pl-20">
            <h4 className="text-3xl leading-8 font-bold underline text-amber-700 dark:text-amber-600 tracking-tight sm:leading-9">
              {eventData?.name}
            </h4>
            <div>
              <p className='text-sm font-medium'>{eventData?.desc?.split(new RegExp('\r?\n', 'g')).map(function (item, idx) {
                // it replace the enter key or \n  with <br/> tag.
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                )
              })}</p>
            </div>
            <span className='text-amber-700'>Date : {eventData?.date}</span>
          </div>
          <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
            <img src={eventData?.imgPath} alt="poster" loading='lazy' className="relative mx-auto shadow-lg lg:w-[32rem] rounded w-auto" />
          </div>
        </div>
      </div>

    </>
  )
}

export default EventsDetails