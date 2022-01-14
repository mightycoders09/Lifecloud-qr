import React, { useState } from 'react'
import '../../pages/profile/profiledetails.css'
import { Link } from 'react-router-dom'
export const Gallery = ({ profiledata, id }) => {
    const [next, setnext] = useState(3);
    const handleShowMoreImages = () => {
        setnext(next + 3);
    };
    return <>
        <h1 className="gallery-title">Gallery</h1>
        <div className="imgs-container">
            {profiledata.gallery.slice(0, next).map(img => {
                return <div className="gallery-img">
                    <img style={{ width: '250px', hegight: '250px' }} src={`http://localhost:8800/${img}`} alt="" />
                </div>
            })}

            <Link to={`/editprofiles/${id}`}> <div className="gallery-img last-img">+</div></Link>
        </div>
        <div className={next >= profiledata.gallery.length ? ' hideBtn ' : ` full-btn`}
            onClick={handleShowMoreImages}>+ Full Gallery</div>
    </>
}
