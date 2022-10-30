import React from "react";
import BlogCard from "./BlogCard";
import "./blog.css";
function Blogs() {
  return (
    <>
      <div className="bg-blue-900">
        <div className="blogs-2022">
          <div className="blogs-year m-8 font-bold text-left text-4xl">
            <h1>2022</h1>
          </div>
          <div className="blogs-grid">
            <BlogCard
              title="First Blog"
              date="20th Sep, 2020"
              description="first blog kkkk kkkkkkkkk kkkkkkkkk kkkkkkk kkkkk kk kk kkkkk kk kkkk kk kkkkkkkk kkkkkkkk kkkkkkk kkkkkkkk kkkkkkkkkk kkkkk kkkk kkkkkkk kkkkk kkkk kkkkk kkkkk"
              link="https://ieee-sbnitp.blogspot.com/?fbclid=IwAR12XFGATSG30Xx1eldkuetkiju4gY-cVQnRmK2Jvs36MCZ3aM_4qGJMiVg"
            />
            <BlogCard
              title="IMPULSE'22"
              date="22-10-2020"
              description="second blog"
            />
            <BlogCard
              title="IMPULSE'22"
              date="22-10-2020"
              description="third blog"
            />
          </div>
        </div>
        <div className="blogs-2021">
          <div className="blogs-year">
            <h1>2021</h1>
          </div>
          <div className="blogs-grid">
            <BlogCard
              title="First Blog"
              date="20th Sep, 2020"
              description="first blog kkkk kkkkkkkkk kkkkkkkkk kkkkkkk kkkkk kk kk kkkkk kk kkkk kk kkkkkkkk kkkkkkkk kkkkkkk kkkkkkkk kkkkkkkkkk kkkkk kkkk kkkkkkk kkkkk kkkk kkkkk kkkkk"
              link="https://ieee-sbnitp.blogspot.com/?fbclid=IwAR12XFGATSG30Xx1eldkuetkiju4gY-cVQnRmK2Jvs36MCZ3aM_4qGJMiVg"
            />
            <BlogCard
              title="IMPULSE'22"
              date="22-10-2020"
              description="second blog"
            />
            <BlogCard
              title="IMPULSE'22"
              date="22-10-2020"
              description="third blog"
            />
            <BlogCard
              title="IMPULSE'22"
              date="22-10-2020"
              description="second blog"
            />
            <BlogCard
              title="IMPULSE'22"
              date="22-10-2020"
              description="third blog"
            />
          </div>
        </div>
      </div>

      {/* <div className='blogs m-8'>
                <h1 className='text-center font-bold'>Blogs ---- Sneha kumari</h1>
                <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                    <BlogCard title="IMPULSE'22" date="22-10-2020" description="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"/>
                    <BlogCard title="IMPULSE'22" date="22-10-2020" description="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"/>
                    <BlogCard title="IMPULSE'22" date="22-10-2020" description="hhhhhhhhhhh"/>
                    <BlogCard title="IMPULSE'22" date="22-10-2020" description="hhhhhhhhhhh"/>
                </div>
            </div> */}
    </>
  );
}

export default Blogs;
