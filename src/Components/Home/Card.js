import React from 'react'
import { Link } from 'react-router-dom'

function Card({ data, id }) {
  let todayDate = new Date().toISOString().slice(0, 10)
  return (
    <>
      <div className="mx-0 lg:mx-5 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl w-full mb-8 rounded-lg border-b border-amber-500">
          <div className="flex-auto">
            {(todayDate < data?.date) ? <>
              <span class="bg-gray-100 text-amber-700 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-amber-600 dark:text-gray-300 absolute -left-4 -top-4 animate-pulse" title='Click Image to Register'>Register Now</span>
            </> : null}
            <Link to={`/events/${id}`}>
              <img src={data?.imgPath} alt="" title='Click to See full details' loading='lazy' />
            </Link>
            <h6 className="text-xl font-semibold">{data?.name}</h6>
            <p className="mt-2 mb-4 text-gray-400">
              {data?.desc.slice(0, 105) + "..."}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card