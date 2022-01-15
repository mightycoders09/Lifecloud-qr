import React from 'react'
import share from '../../assets/share.png'
import Topbar from '../topbar/Topbar'
import './memory-creation.css'
const MemoryCreation = () => {
    return (
        <>
            <Topbar />
            <div className='memory-creation-container'>
                <div className='memory-creation-title'>
                    <h1>Memory Creation</h1>
                </div>
                <div className='memory-creation-content'>
                    <input className='memory-creation-input' />
                    <div className='action-container'>
                        <div className='white-circle share-icon'>
                            <image alt='' className='share-icon' src={share}></image>
                        </div>
                        <span>share</span>
                    </div>
                    <div className='action-container'>
                        <div className='white-circle add-icon'>+</div>
                        <span>Add image</span>
                    </div>
                    <div className='action-container'>
                        <div className='white-circle add-icon'>+</div>
                        <span>Add video</span>
                    </div>
                </div>
                <div className='memory-creation-bottom-actions'>
                    <div className='publish-btn'>Publish</div>
                    <div className='dlt-btn'>Delete</div>
                </div>
            </div>
        </>
    )
}

export default MemoryCreation