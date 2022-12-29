import React from 'react'

function ImageCard({ data }) {
    return (
        <>
            <div className="rounded overflow-hidden">
                <img className="w-full" src={data} alt="gallery" loading='lazy' />
            </div>
        </>
    )
}

export default ImageCard