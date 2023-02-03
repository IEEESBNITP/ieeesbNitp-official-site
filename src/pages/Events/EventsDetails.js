import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteDoc, doc, getDoc } from 'firebase/firestore'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from "react-icons/fa"
import SimpleLoader from '../PageLoader/SimpleLoader'
import { db, auth, storage } from '../../Firebase'
import { useParams } from 'react-router-dom'
import Modal from './Modal'
import { deleteObject, ref } from 'firebase/storage'
function EventsDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
  const { id } = params; //getting the id of event from params 
  const [eventData, setEventData] = useState({});
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //function for fetching the details
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
  useEffect(() => {
    fetchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // function to detect is any hyperlink is there in string/text description 
  const linkIfy = (text) => {
    //eslint-disable-next-line
    let urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text?.replace(urlRegex, function (url) {
      return '<a style="color:#70B5F9;text-decoration:underline" target="_blank" className="hover:underline" href="' + url + '">' + url + '</a>';
    });
  }
  // function for deleting the events
  const deleteEvent = async () => {
    try {
      const yes = window.confirm("Confirm Do you want to delete?")
      if (yes) {
        setLoader(true);
        await deleteObject(ref(storage, eventData?.forDeletePath)); //deleting the image of member // data.imgPath
        await deleteDoc(doc(db, 'events', id)); //deleting the data of member 
        setLoader(false)
        navigate('/events')
      }
    } catch (error) {
      setLoader(false)
      console.log(error)
    }
  }
  if (loader) {
    return <SimpleLoader />
  }
  return (
    <>
      <div className="relative bg-white dark:bg-gray-800 p-4">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 md:pl-20">
            <div className='flex'>
              <h1 className="text-3xl leading-8 font-bold underline text-amber-700 dark:text-amber-600 tracking-tight sm:leading-9">
                {eventData?.name}
              </h1>
              {(auth && localAuth) ? (<>
                <button className='' onClick={e => setShowModal(!showModal)}><FaEdit className='hover:text-amber-600 mx-10 my-3' /></button>
                <button className='' onClick={deleteEvent}><MdDelete className='hover:text-amber-600 mx-5 my-3' /></button>
              </>) : null}
            </div>
            <div>
              <p className='text-sm font-medium'>{eventData?.desc?.split(new RegExp('\r?\n', 'g')).map(function (item, idx) {
                // it replace the enter key or \n  with <br/> tag.
                return (
                  <span key={idx}>
                    {<span dangerouslySetInnerHTML={{ __html: linkIfy(item) }} />}
                    <br />
                  </span>
                )
              })}</p>
            </div>
            <span className='text-amber-600'>Date : {eventData?.date}</span>
          </div>
          <div className="mt-10 lg:-mx-0 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
            <img src={eventData?.imgPath} alt="poster" loading='lazy' className="relative mx-auto shadow-lg lg:w-[32rem] rounded w-auto" />
          </div>
        </div>
      </div>
      {showModal ? (<>
        <Modal eventData={eventData} setShowModal={setShowModal} fetchEvent={fetchEvent} id={id} />
      </>) : null}
    </>
  )
}

export default EventsDetails