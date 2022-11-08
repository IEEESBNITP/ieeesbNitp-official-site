import React from "react";
import { useState } from "react";

function ListBlog() {
  const [blog, setBlog] = useState({
    title: "",
    desc: "",
    date: "",
    link: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setBlog({ ...blog, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, desc, date, link } = blog;
    if (title !== "" && desc !== "" && link !== "" && date !== "") {
      const res = fetch(
        
        "https://ieee-demo-web-default-rtdb.firebaseio.com/blogRecords.json",
        
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            desc,
            date,
            link,
          }),
        }
      );
      if (res) {
        alert("Data stored");
        setBlog({
          title: "",
          desc: "",
          date: "",
          link: "",
        });
      } else {
        alert("Please fill the data");
      }
    } else {
      console("Please fill the data");
    }
  };

  return (
    <>
      <div className="dark:bg-[#181F2A]">
        <h1 className="text-xl text-center text-gray-50 font-serif py-5">
          List New Upcoming Blogs
        </h1>
        <div className="md:p-20 px-5 py-2">
          <form>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                id=""
                placeholder="title"
                value={blog.title}
                onChange={handleInputs}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="desc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Description
              </label>
              <textarea
                type="desc"
                name="desc"
                id=""
                placeholder="description"
                value={blog.desc}
                onChange={handleInputs}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="link"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Blog Link
              </label>
              <input
                type="text"
                name="link"
                id=""
                placeholder="Link"
                value={blog.link}
                onChange={handleInputs}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select Date
              </label>
              <input
                type="date"
                name="date"
                id=""
                placeholder="date"
                value={blog.date}
                onChange={handleInputs}
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white dark:bg-gray-700 dark:text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0"
              />
            </div>
            <div>
              <button
                className="mt-5 tailwind-btn w-full"
                onClick={handleSubmit}
                type="submit"
              >
                List Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ListBlog;
