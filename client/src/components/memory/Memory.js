import React, { onClick } from 'react'
import './memory-page.css'
import BottomLeftCloud from '../../assets/bottom-left-cloud.png'
import TopRightCloud from '../../assets/top-right-cloud.png'
import Topbar from '../topbar/Topbar'

const Memory = ({ profiledata, close }) => {
    console.log(profiledata)
    return (
            <div className="memory-page">
                <img alt='' src={TopRightCloud} className='top-cloud'></img>
                <div>
                    <div>
                        <h1>Raz Cohen | 12.3.22</h1>  {/* add the title prome profiledata memory with the memory index */}
                        <img src={profiledata.gallery[0]} alt=''></img>
                    </div>
                    <h1 onClick={close} className='close-btn'>חזרה</h1>
                </div>
                <img src={BottomLeftCloud} className='bottom-cloud' alt=''></img>
            </div>
    )
}

export default Memory