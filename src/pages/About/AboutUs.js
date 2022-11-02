import React from 'react'

function AboutUs() {
    return (
        <>
            <section>
                <div className="m-2 rounded-md shadow-xl hover:shadow-2xl">
                    <h1 className='text-center text-lg mx-5 font-serif'>SOURCE OF INSPIRATION</h1>
                    <div className='text-center'>
                        <div className='hero container max-w-screen-lg mx-auto flex justify-center'>
                            <img src="director.jpg" className='rounded-full w-1/5 ring-1 ring-amber-600' alt="Director-img" loading='lazy' />
                        </div>
                        <span className='mx-1 text-sm font-thin text-amber-600'>Prof. PRADIP KUMAR JAIN</span>
                    </div>
                    <div className='p-2 font-medium text-gray-500'>
                        <p className='text-justify'>We are blessed to find ourselves lucky to be the part of this institution which is directed by our motivational, inspirational, enthusiastically, highly legitimate and highly knowledgeable personality Prof. P.K Jain. Whenever we have stumbled with some problems, a piece of advice or direction from his side have made our path crystal clear. His righteousness has always guided us to traverse the correct path. He has always motivated us to improve and bring the best of us. He is the major source of inspiration for all of us, as he portrays the best example to live a life with simple living and high thinking. He glorifies our institutes to the best level. We are proud to be part of this institution directed by a great personality like Prof. P.K Jain, Director NIT Patna. We are thankful for all the support and guidance that he has bestowed to the students of this college. He is a senior member of IEEE, fellow of Institution of Electronics and Telecommunications Engineers of India, Fellow of Institution of Engineers of India and also a fellow of Vacuum Electron Devices and Application Society.</p>
                    </div>
                </div>
                <div className='m-2 rounded-md shadow-xl hover:shadow-2xl'>
                    <div className='flex'>
                        <h1 className='text-2xl text-left m-2 font-serif text-amber-600'>IEEE</h1>
                        <div className='hero container max-w-screen-xl mx-auto flex justify-end'>
                            <img src="icon_ieee_blue.png" className='h-14' alt="ieee-logo" loading='lazy' />
                        </div>
                    </div>
                    <hr />
                    <div className='p-2 text-gray-500 font-medium'>
                        <p className='text-justify'>IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities. IEEE, pronounced "Eye-triple-E," stands for the Institute of Electrical and Electronics Engineers. The association is chartered under this name and it is the full legal name.IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities.</p>
                    </div>
                </div>
                <div className='m-2 rounded-md shadow-xl hover:shadow-2xl'>
                    <div className='flex py-1'>
                        <h1 className='font-serif m-2 text-2xl text-amber-600'>IEEE SB NIT PATNA</h1>
                        <div className='hero container max-w-screen-lg mx-auto flex justify-end'>
                            <img src="nitplogo.png" className='h-14' alt="nit-logo" loading='lazy' />
                        </div>
                    </div>
                    <hr />
                    <div className='p-2 text-gray-400 font-medium'>
                        <p className='text-justify'>IEEE Student Branch, NIT Patna was established with an enthusiastic initiative of 13 students of NIT Patna enrolled in B.Tech programme of Electrical Engineering and Electronics and Communication Engineering under the leadership of Prof Kumar Abhishek, Assistant professor of Computer Science and Engineering. In this whole path our mentors were the three great visionaries of our college Dr Asok De (Director NIT Patna), Dr D.K. Singh (HOD, Electronics and Communication Engineering), and Dr M.P Singh (HOD, Computer Science and Engineering). Prof. Kumar Abhishek became the first Branch Counsellor of the Student Branch and Shruti Neha became the first Student Branch Chair. IEEE Student Branch, NITP was established with a vision of making students aware of new developments in various engineering fields and to provide support in implementing new innovative ideas of future engineers which can give a new shape to this world.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs