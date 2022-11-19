import React from 'react'

function ImageCard({data}) {
    console.log("item", data)
    return (
        <>
            <div className="rounded overflow-hidden">
                <img className="w-full" src={data} alt="gallery" loading='lazy' />
                {/* <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Impulse</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#IEEE</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Impulse</span>
                </div> */}
            </div>
        </>
    )
}

export default ImageCard