import React from 'react'

const Video = ({videoSrc, classNames}) => {
    return (
        <div>
            <iframe
                className={`w-36 h-24 ${classNames}`}
                src="https://www.youtube.com/embed/XEzRZ35urlk?si=OdEdj0hfZkmhQ8YA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
            <p className='mt-2 text-center text-sm text-gray-700'>3hrs ago</p>
        </div>
    )
}

export default Video