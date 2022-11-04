import React from "react";

const BlogCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="mt-6 md:py-4 md:px-6 border shadow-xl border-amber-500 "
        >
          <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-400">
            {item.date}
          </p>

          <h1 className="mt-4 text-2xl font-semibold text-amber-600 capitalize">
            {item.title}
          </h1>
          <div>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-400">
              {item.description}
              <a>
                <button className="font-medium rounded-lg text-amber-500 ">
                  Read More
                </button>
              </a>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
