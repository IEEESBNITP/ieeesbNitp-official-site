import React from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { BsPen } from 'react-icons/bs'
function EventElements({ data, id}) {
  let result = data.desc.slice(0, 100);
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#334155', borderBottom: '5px solid #D97706' }}
        contentArrowStyle={{ borderRight: '7px solid  #334155' }}
        date={data.date}
        iconStyle={{ background: "#D97706", color: "#fff" }}
        icon={<BsPen />}
      >
        <div className="flex">
          <div>
            <h3 className="vertical-timeline-element-title font-bold font-serif md:text-xl underline decoration-amber-600 dark:text-gray-300 text-white">{data.name}</h3>
            <p className="dark:text-gray-400 text-gray-300" style={{fontSize:'0.75rem'}}>
              {result}...<Link className="hover:text-amber-600 hover:underline" to={`/events/${id}`}>Read more</Link>
            </p>
          </div>
          <div>
            <Link className="hover:text-amber-600" to={`/events/${id}`}>
              <img src={data?.imgPath} alt="poster" className="w-40" loading="lazy" />
            </Link>
          </div>
        </div>
      </VerticalTimelineElement>
    </>
  );
}

export default EventElements;
