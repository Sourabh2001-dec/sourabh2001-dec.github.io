import React from 'react'

const PartitionHeading = ({text}:{text : string}) => {
    return (
        <div className="my-7" data-aos="fade-up" data-aos-offset="-200">
            <div className="flex space-x-2 items-center">
                <span className="w-1/12 bg-primary h-0.5"></span>
                <h2 className="text-xl font-black uppercase tracking-widest text-secondary">{text}</h2>
            </div>
        </div>
    )
}

export default PartitionHeading
