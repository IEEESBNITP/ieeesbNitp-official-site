import React from 'react'
import ProfileCard from './ProfileCard'
function Committee() {
    return (
        <>
            <section class="bg-white dark:bg-[#181F2A]">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>

                    <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p>

                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                       <ProfileCard/>
                       <ProfileCard/>
                       <ProfileCard/>
                       <ProfileCard/>
                       <ProfileCard/>
                       <ProfileCard/>
                       <ProfileCard/>
                       <ProfileCard/>
                       <ProfileCard/>
                       <ProfileCard/>
                       <ProfileCard/>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Committee