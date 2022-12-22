import React, { useState } from "react";
import { auth, db } from "../../Firebase";
import { GiCrossedSabres } from "react-icons/gi";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import SimpleLoader from "../PageLoader/SimpleLoader";

const BlogCard = ({ data, id, fetchBlog }) => {

  const [loader, setLoader] = useState(false);
  const [blog, setBlog] = useState({
    title: data?.title,
    desc: data?.desc,
    date: data?.desc,
    link: data?.link,
  });
  const [showModal, setShowModal] = useState(false);
  const localAuth = JSON.parse(localStorage.getItem("ieee-auth"));
  //function for delete the blog
  const deleteBlog = async (id) => {
    //function for delete the blog and their details as well. OP
    try {
      const yes = window.confirm("Confirm Do you want to delete?");
      if (yes) {
        setLoader(true);
        await deleteDoc(doc(db, 'blogs', id)); //deleting the data of member
        setLoader(false);
        fetchBlog(); // calling fetchCommittee so that changes can render or reflect automatically
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const editDetails = () => {
    // show and hide details/modal
    setShowModal(!showModal);
  };
  const handleInputs = (e) => {
    //this function will handle the input
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setBlog({ ...blog, [name]: value });
  };
  const updateDetails = async () => {
    //function for updating the details of blog
    const { title, desc, date, link } = blog;
    try {
      const yes = window.confirm("Confirm do you want to update?"); //confirmation
      if (yes) {
        setLoader(true);
        const docRef = doc(db, "blogs", id);
        await updateDoc(docRef, { title, desc, date, link }); // updating the doc
        setShowModal(false);
        setLoader(false);
        editDetails();
        fetchBlog(); // calling fetchBlog so that changes can render or reflect automatically
      }

    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border-2 cursor-pointer rounded-xl border-amber-500 hover:border-transparent group  hover:shadow-xl dark:border-gray-700 dark:hover:border-transparent">
        {(auth.currentUser && localAuth) ? (
          <>
            <button>
              <FiEdit
                className="absolute top-2 right-2 text-xl hover:text-amber-600"
                onClick={editDetails}
              />
            </button>
            <button>
              <AiFillDelete
                className="absolute top-2 right-8 text-xl hover:text-amber-600"
                onClick={(e) => deleteBlog(id)}
              />
            </button>
          </>
        ) : null}
        <div>
          <p className=" text-gray-500 font-mono dark:text-gray-300 group-hover:text-gray-400">{data?.date}</p>
          <h1 className="mt-2.5 text-lg text-center font-medium text-amber-500 capitalize">{data?.title?.substring(0, 30) + "..."}</h1>
          <div>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-400">
              {data?.desc?.substring(0, 50) + "..."}
              <a href={data?.link} target="_blank" rel="noreferrer">
                <span className="font-serif rounded-lg text-amber-600 hover:underline ">
                  Read More
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <form>
                  <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {data?.title}
                    </h3>
                    <button
                      type="button"
                      onClick={editDetails}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-toggle="defaultModal"
                    >
                      <GiCrossedSabres className="text-amber-600 text-lg" />
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="px-5">
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={blog?.title}
                        onChange={handleInputs}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="desc"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        name="desc"
                        id="desc"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={blog?.desc}
                        onChange={handleInputs}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={blog?.date}
                        onChange={handleInputs}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="link"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Link
                      </label>
                      <input
                        type="text"
                        name="link"
                        id="link"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={blog.link}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="tailwind-btn"
                      onClick={updateDetails}
                    >
                      {loader ? <SimpleLoader /> : "Update"}
                    </button>
                    <button
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-amber-600 rounded-lg border border-amber-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-amber-600 dark:border-amber-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      onClick={editDetails}
                    >
                      Decline
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default BlogCard;
