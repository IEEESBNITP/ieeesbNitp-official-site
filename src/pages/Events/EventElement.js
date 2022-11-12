import React from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { BsPen } from 'react-icons/bs'
function EventElements({ data, id }) {
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
            <h3 className="vertical-timeline-element-title font-medium text-gray-300">{data.name}</h3>
            <p className="text-gray-400 text-sm">
              {result}...<Link className="hover:text-amber-600" to={`/events/${id}`}>Read more</Link>
            </p>
          </div>
          <div>
            <img src={data?.imgPath} alt="poster" className="w-40" loading="lazy" />
          </div>
        </div>
      </VerticalTimelineElement>
    </>
  );
}

export default EventElements;
