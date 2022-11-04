import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { db } from "../../Firebase";
import { collection, getDocs, query } from "firebase/firestore";

// cd ieeesbNitp-official-site
function Blogs() {
  const [query, setQuery] = useState("");
  const keys = ["title", "description", "date"];


  //we can use firebase function to search

  // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };

  return (
    <>
      <section className="px-6 py-6 justify-center bg-white dark:bg-[#181F2A]">
        <form className="w-max mx-auto">
          <input
            className="px-6 py-2 text-gray-700 w-150 h-12 rounded border cursor-pointer placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
            type="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>


        {/* let blog = fetched array */}
        {/* {blog.map((item) => {
          return <BlogCard key={item.id} id={item.id} data={item.data} />;
        })} */}
        
      </section>
    </>
  );
}

export default Blogs;
