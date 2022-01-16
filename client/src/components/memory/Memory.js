import React, { onClick, useEffect, useState } from 'react'
import './memory-page.css'
import BottomLeftCloud from '../../assets/bottom-left-cloud.png'
import TopRightCloud from '../../assets/top-right-cloud.png'
import Rectangle6 from '../../assets/Rectangle6.png'
import heart from '../../assets/heart.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import Arrow1 from '../../assets/Arrow1.png';


const Memory = ({ data, close, handleLike }) => {
    const [commenting, setCommenting] = useState(false)
    const isUserAdmin = true
    const comments = [
        {
            profileImg: Rectangle6,
            uploadDate: '12/12/2020',
            uploadTime: '12:12',
            uploaderName: 'John Doe',
            comment: 'time flies...'
        }]
    console.log(data, 'data')
    return (
        <div className="memory-page">
            <div className='single-memory-content-container'>
                <div className='single-memory-subcontainer'>
                    <h1 className='single-memory-title'>Raz Cohen | 12.3.22</h1>  {/* add the title prome profiledata memory with the memory index */}
                    <img src={Rectangle6} alt='' className='single-memory-img'></img>
                    <div className="icons-container">
                        <div className="memory-heart-container">
                            <div className="heart-div">
                                <img
                                    style={{ cursor: 'pointer' }}
                                    className="heart-icon"
                                    src={heart}
                                    alt=""
                                    onClick={()=>handleLike(data)}
                                ></img>
                                {data.likes.length}
                            </div>
                        </div>
                        <div className="facebook-container">
                            <div className="heart-div">
                                <img
                                    className="heart-icon"
                                    src={facebook}
                                    alt=""
                                ></img>
                            </div>
                        </div>
                        <div className="instagram-container">
                            <div className="heart-div">
                                <img
                                    className="heart-icon"
                                    src={instagram}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <p className='single-memory-text'>{Memory.text || 'lorem ipsum'}</p>
                    <div className='comments-container'>
                        <h2>Comments</h2>
                        {comments.map((comment, index) => {
                            return (
                                <div className='comment-container'>
                                    <span className='comment-subcontainer'>
                                        <img src={comment.profileImg} alt='' className='comment-img' />
                                        <p>{comment.uploadDate}</p>
                                        |
                                        <p>{comment.uploadTime}</p>
                                        <p>{comment.uploaderName}:</p>
                                        <p>{comment.comment}</p>
                                    </span>
                                    <span>delete -</span>
                                </div>
                            )
                        })}
                        <div className='action-btns-container'>
                            <div onClick={() => setCommenting(!commenting)} className={!commenting && 'comment-btn'}>
                                {commenting ?
                                    <input />
                                    :
                                    'Comment...'
                                }
                            </div>
                            <div className='action-btns'>
                                <div className='action-btn'>Publish</div>
                                <div className='action-btn'>Cancel</div>
                            </div>
                            {isUserAdmin &&
                                <div className='dlt-comment-btn'>Delete Memory</div>
                            }
                        </div>
                    </div>
                </div>
                <h1 onClick={close} className='close-btn'>Back <img alt='' src={Arrow1}></img></h1>
            </div>
            <img alt='' src={TopRightCloud} className='top-cloud'></img>
            <img src={BottomLeftCloud} className='bottom-cloud' alt=''></img>
        </div>
    )
}

export default Memory