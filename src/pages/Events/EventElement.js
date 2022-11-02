import React from "react";
import { Link } from "react-router-dom"; 
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {BsPen} from 'react-icons/bs'
function EventElements({data}) {
  let result = data.desc.slice(0, 100);
  return (
    <>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{background:'#334155',borderBottom:'2px solid #D97706'}}
          contentArrowStyle={{ borderRight: '7px solid  #334155'}}
          date={data.date}
          iconStyle={{ background: "#D97706", color: "#fff" }}
          icon={<BsPen />}
        > 
        <div className="flex">
          
          <div>
          <h3 className="vertical-timeline-element-title">{data.name}</h3>
          <p>
            {result}...<Link className="hover:text-amber-600" to="/events/:{data.id}">Read more</Link>
          </p>
          </div>
          <div>
            <img src={data?.imgPath} alt="poster"  className="w-40" />
          </div>
        </div>
        </VerticalTimelineElement>
    </>
  );
}

export default EventElements;
