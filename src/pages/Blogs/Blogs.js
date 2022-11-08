import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { db } from "../../Firebase";
import { collection, getDocs, query } from "firebase/firestore";
import SimpleLoader from "../PageLoader/SimpleLoader";
import { FirebaseError } from "firebase/app";
// cd ieeesbNitp-official-site
function Blogs() {
  const [query, setQuery] = useState("");
  const keys = ["title", "description", "date"];
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);
  const fetchBlog = async () => {
    try {
      // Get reference
      setLoading(false);
      FirebaseError.db().ref('blogRecords/').on("value",snapshot => {
        let event = [];
        snapshot.foreach( snap => {
          event.push(snap.val());
        });
        this.setBlog({event:event});
      });


      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  if (loading) {
    // return <PageLoader/>
    return <SimpleLoader />;
  }

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

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {blog.map((item) => {
            return (
              <BlogCard
                key={item.id}
                id={item.id}
                data={item.data}
                fetchBlog={fetchBlog}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blogs;
