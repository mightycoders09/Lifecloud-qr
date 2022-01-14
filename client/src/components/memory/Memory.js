import React, { onClick } from 'react'
import './memorypopup.css'
import BottomLeftCloud from '../../assets/bottom-left-cloud.png'
import TopRightCloud from '../../assets/top-right-cloud.png'

const Memory = ({ props, close }) => {
    return (
        <div className="memory-popup">
            <div style={{ backgroundImage: TopRightCloud }}></div>
            <div>
                here will be the memory
                <h1 onClick={close} className='close-btn'>close</h1>
            </div>
            <div style={{ backgroundImage: BottomLeftCloud }}></div>
        </div>
    )
}

export default Memory