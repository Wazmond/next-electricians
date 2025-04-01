import Image from 'next/image'
import React from 'react'

interface Props {
    image: string
    alt: string
    title: string
    description: string
}

const ServicesCard = (props: Props) => {
    const { image, alt, title, description } = props
    return (
        <div className='flex flex-col'>
            <div>
                <Image src={image} alt={alt} />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ServicesCard