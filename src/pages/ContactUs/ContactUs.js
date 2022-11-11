import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";
import SvgFirst from "./SvgFirst";
import SvgSecond from "./SvgSecond";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m2ee7v4",
        "template_otbbwsv",
        form.current,
        "yIQ7OcArJiuLKv89e"
      )
      .then(
        (result) => {
          toast.success("Sended Successfully")
          console.log(result.text);
        },
        (error) => {
          toast.error("Something Went Wrong")
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="bg-gray-800 text-gray-100 p-2 md:px-8 md:py-12">
        <div className="text-center w-full">
          <SvgFirst/>
        </div>
        <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300 rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8">
                Hate forms? Send us an <span className="underline">email</span>{" "}
                instead.
              </div>
            </div>
            <div className="mt-8 text-center">
              <SvgSecond/>
            </div>
          </div>
          <div className="">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Full Name"
                  name="user_name"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Email"
                  name="user_email"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Message"
                  name="message"
                />
              </div>
              <div className="mt-8">
                <button
                  className="uppercase border shadow-xl hover:shadow-amber-500 border-amber-500 px-3 py-1 font-medium rounded-lg w-full text-amber-500 hover:bg-amber-500 hover:text-slate-900  text-lg"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
