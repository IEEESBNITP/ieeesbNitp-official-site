import { collection, getDocs, orderBy, query, } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db, auth } from '../../Firebase';
import SimpleLoader from '../PageLoader/SimpleLoader'
import ImageCard from './ImageCard'
function Gallery() {
  // const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(2022)
  const [data, setData] = useState([]);
  const [loader, setLoading] = useState(false);
  const fetchImages = async () => {
    try {
      // Get reference
      setLoading(true)
      const galleryRef = collection(db, `gallery${parseInt(year)}`)
      // Create a query
      const q = query(
        galleryRef,
        orderBy('timestamp', 'desc'),
      )
      // Execute query
      const querySnap = await getDocs(q)

      const data = [] // not a global variable 

      querySnap.forEach((doc) => {
        //running two time loops one for docs and second one for imgUrls array
        doc.data()?.imgUrls?.forEach((doc) => {
          return data.push(doc)
        })
        // data.push(doc.data().imgUrls)
      })
      setData(data);
      setLoading(false)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year])
  if (loader) {
    return <SimpleLoader />
  }
  const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
  return (
    <>
      <div>
        <div className='flex justify-between'>
          <div className='p-5'>
            <label htmlFor="cars" className='text-gray-400'>Year </label>
            <select name="year" id="year" className='bg-amber-600 rounded px-5 py-1 text-white' value={year} onChange={e => setYear(e.target.value)}>
              <option value="2022" selected>2022</option>
              <option value="2023">2023</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
          {(auth?.currentUser && localAuth) ? <>
            <div className='p-5'>
              <Link to="/upload-gallery"><button className='bg-amber-600 rounded px-5 py-1 text-white'>Upload Pics</button></Link>
            </div>
          </> : null}
        </div>
        <div className="p-4 md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {data?.map((item, id) => {
            return <ImageCard key={id} data={item} />
          })}
        </div>
      </div>
    </>
  )
}

export default Gallery
