import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { db } from "../../Firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import SimpleLoader from "../PageLoader/SimpleLoader";
function Blogs() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);
  const [noOfBlogs, setNoOfBlogs] = useState(8)
  const fetchBlog = async () => {
    try {
      // Get reference
      setLoading(true)
      const eventRef = collection(db, 'blogs')

      // Create a query
      const q = query(
        eventRef,
        orderBy('date', 'desc'),
        limit(parseInt(noOfBlogs))
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
  //function to fetch 4 more blogs everyTime 
  const fetchMoreBlogs = async () => {
    try {
      // Get reference
      const eventRef = collection(db, 'blogs')

      // Create a query
      const q = query(
        eventRef,
        orderBy('date', 'desc'),
        limit(parseInt(noOfBlogs) + 4)
      )
      // Execute query
      const querySnap = await getDocs(q)
      const blog = []
      querySnap.forEach((doc) => {
        return blog.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setBlog(blog);
      setLoading(false)
      setNoOfBlogs(parseInt(noOfBlogs) + 4)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  const searchBlogs = async (e) => {
    e.preventDefault()
    setLoading(true)
    const usersRef = collection(db, "blogs");
    // create query object
    const q = query(usersRef);
    // execute query
    const blogDocs = await getDocs(q);
    const blog = []
    blogDocs.forEach((doc) => {
      blog.push({
        id: doc.id,
        data: doc.data(),
      });
    })
    const filterData = blog.filter((value) => {
      return (value.data.title.toLowerCase().includes(searchText.toLowerCase()) || value.data.desc.toLowerCase().includes(searchText.toLowerCase()) ||value.data.date.toLowerCase().includes(searchText.toLowerCase()))
    })
    setLoading(false);
    setSearchText("")
    setBlog(filterData);
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
          <form onSubmit={searchBlogs}>
            <div className="from-control">
              <div className="relative md:w-1/2">
                <input
                  type="text"
                  className="w-full  pr-40 bg-gray-200 input text-black border-amber-500"
                  placeholder="Search"
                  value={searchText}
                  onChange={e => setSearchText(e.target.value)}
                />
                <button className="absolute top-0 right-0 rounded-l-none w-36 btn border-amber-500 ">
                  Go
                </button>
              </div>
            </div>
          </form>
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
        <div className="px-1 py-2.5">
          <button className="rounded-l w-36 btn border-amber-500 text-amber-500" onClick={fetchMoreBlogs}>LoadMore</button>
        </div>
      </section>
    </>
  );
}

export default Blogs;
