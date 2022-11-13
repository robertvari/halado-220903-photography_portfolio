import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import Masonry from 'react-masonry-css'

export default function GalleryPage() {
    const {category} = useParams()
    const [images, set_images] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3001/photos"
        }).then(res => set_images(res.data))
    }, [])

    return (
        <div className='gallery-container'>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    images.filter(image_data => image_data.category === category)
                    .map(data => <img key={data.id} src={data.image}/>)
                }
            </Masonry>
        </div>
    )
}
