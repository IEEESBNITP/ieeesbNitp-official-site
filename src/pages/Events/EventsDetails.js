import React from 'react'
import { useParams } from 'react-router-dom'

function EventsDetails() {
  
  const params = useParams();
  const { name } = params;
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="relative flex">
          <div class="min-h-screen lg:w-1/3"></div>
          <div class="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div
            class="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl xl:text-5xl dark:text-white">
              {name}
            </h1>

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img class="object-cover object-center w-full lg:w-[32rem] rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/ieee-sb-nitp-83c5d.appspot.com/o/events%2F1664873155889%20-%20WhatsApp%20Image%202022-10-04%20at%202.13.07%20PM.jpeg?alt=media&token=d69ba4b2-2899-4497-9ff4-8168f48fbdcb" alt="" />

              <div class="mt-8 lg:px-10 lg:mt-0">
                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                  Help us improve our productivity
                </h1>

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  "When you aim for perfection, you discover it's a moving target. " Hola Techies, IEEE SB NITP has come up with one of its flagship events IMPULSE'22 which itself is an amazing experience as you will get a chance to showcase your skills in different rounds. IMPULSE'22 consists of three rounds👇-➡️ Round 1: MCQ test on 11th April 2022➡️ Round 2: Group Discussion (GD) on 12th-13th April 2022➡️ Round 3: PPT Presentations on 17th April 2022Register now by filling out the google form👇🏻https://bit.ly/3uNRJU8Or scan the QR Code from the poster attached. Registration fee: INR 20/-For registration fee, either pay online -UPI id: 8696095895@yblOr you can also deposit cash to your respective CR's. Winners will receive cash prizes and goodies 🤩 worth INR 3000/- and will be featured on our social media handles. Sounds interesting! Isn't it?😇😇For any queries, please contact👇🏻-Nitin - 8696095895Sonam - 9867984558Regards!IEEE SB NITP
                </p>

                <h3 class="mt-6 text-lg font-medium text-blue-500">Ronik Ederson</h3>
                <p class="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
              </div>
            </div>

            <div class="flex items-center justify-between mt-12 lg:justify-start">
              <button class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventsDetails