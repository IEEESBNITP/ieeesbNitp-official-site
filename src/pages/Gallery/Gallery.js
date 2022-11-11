import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase';
import SimpleLoader from '../PageLoader/SimpleLoader'
import ImageCard from './ImageCard'
function Gallery() {
  const [data, setData] = useState([]);
  const [loader, setLoading] = useState(false);
  const fetchImages = async () => {
    try {
      // Get reference
      setLoading(true)
      const eventRef = collection(db, 'gallery')

      // Create a query
      const q = query(
        eventRef,
        orderBy('year', 'desc')
      )
      // Execute query
      const querySnap = await getDocs(q)

      // const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      const data = [] // not a global variable 

      querySnap.forEach((doc) => {
        return data.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setData(data[0]?.data?.imgUrls);
      console.log(data)
      setLoading(false)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchImages();
  }, [])
  if (loader) {
    return <SimpleLoader />
  }
  return (
    <>
      <div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {data?.map((item, id) => {
            return <ImageCard key={id} data={item} />
          })}
        </div>
      </div>
    </>
  )
}

export default Gallery
