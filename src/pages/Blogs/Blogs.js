import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { db } from "../../Firebase";
import { collection, getDocs, query, onSnapshot ,orderBy } from "firebase/firestore";
import SimpleLoader from "../PageLoader/SimpleLoader";
function Blogs() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);
  const fetchBlog = async () => {
    try {
      // Get reference
      setLoading(true)
      const eventRef = collection(db, 'blogs')

      // Create a query
      const q = query(
        eventRef,
        orderBy('date', 'desc'),
      )
      // Execute query
      const querySnap = await getDocs(q)
      // const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      const blog = []
      querySnap.forEach((doc) => {
        return blog.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setBlog(blog);
      setLoading(false)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchBlogs = (e) => {
    e.preventDefault()
    setLoading(true)
    const usersRef = collection(db, "blogs");
    // create query object
    const q = query(usersRef);
    // execute query
    const unsub = onSnapshot(q, (querySnapshot) => {
      const blog = []
      querySnapshot.forEach((doc) => {
        blog.push(doc.data());
      })
      const filterData = blog.filter((value) => {
        return (value.title.toLowerCase().includes(search.toLowerCase()) || value.desc.toLowerCase().includes(search.toLowerCase()))
      })
      const searchedBlog = [];
      filterData.forEach((doc) => {
        return blog.push({
          id: doc.id,
          data: doc.data,
        })
      })
      setLoading(false);
      setBlog(searchedBlog);
      console.log(filterData)
    });
    return () => unsub();
  }
  if (loading) {
    return (
      <>
        <div className="mt-20">
          <SimpleLoader />
        </div>
      </>)
  }
  return (
    <>
      <section className="px-6 py-6 justify-center bg-white dark:bg-[#181F2A]">
        <div>
          {/* <form className="w-max mx-auto">
            <input
              className=" hover:text-amber-600 md:hover:bg-transparent md:border dark:text-amber-500 md:hover:text-amber-500 dark:hover:text-amber md:dark:hover:bg-transparent md:text-amber-500 font-serif md:bg-amber-600 md:bg-opacity-20 text-amber-500 border-amber-500 placeholder:text-amber-500 md:hover:bg-opacity-10 rounded-l px-4 h-12"
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className=" hover:text-amber-600 md:hover:bg-transparent md:border dark:text-amber-500 md:hover:text-amber-500 dark:hover:text-amber md:dark:hover:bg-transparent md:text-amber-500 font-serif md:bg-amber-600 md:bg-opacity-20 border-amber-500 md:hover:bg-opacity-10 rounded-r px-4 h-12" onClick={searchBlogs}>Search</button>
          </form> */}
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {blog.map((item) => {
            return (
              <BlogCard
                key={item.id}
                id={item.id}
                data={item.data}
                fetchBlog={fetchBlog}
              />
            )
          })}
        </div>
      </section>
    </>
  );
}

export default Blogs;
