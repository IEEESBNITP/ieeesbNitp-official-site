import React from "react";
import './blog.css';
function BlogCard(props) {
  return (

    <div class="blog-card">
      <div className="blog-title">
        <h1>{props.title}</h1>
      </div>
      <div className="blog-description">
        <h2 className="publish-date">{props.date}</h2>
        <p className="blog-summary">{props.description}</p>
        <a href={props.link} target='blank'><button class="c-btn">View Profile</button></a>
      </div>
    </div>

    // <div class="blog-card bg-gray-200 text-center text-black rounded-2xl overflow-hidden shadow-lg cursor-pointer m-8 z-999 hover:z-0">
    //   <div className="blog-title bg-sky-700  p-24 transition-all m-0 text-4xl hover:bg-cyan-600 hover:text-xl hover:p-5 hover:text-white ">
    //     <h1>{props.title}</h1>
    //   </div>
    //   <div className="blog-description transition-all m-1 z-0 scale-50 hover:scale-100">
    //     <h2 className="publish-date">{props.date}</h2>
    //     <p className="blog-summary">{props.description}</p>
    //   </div>
    // </div>
  );
}

export default BlogCard;
