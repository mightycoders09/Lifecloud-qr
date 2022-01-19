import React, { useState } from 'react'
import './friendslist.css'
import Rectangle7 from '../../assets/Rectangle7.png'
const ENFriendsList = (friends) => {
    const [friendsList, setFriendsList] = useState({
        friendRequests: [{ name: 'Omer Raz', profileImg: Rectangle7 }],
        friends: [{ name: 'Omer Raz', profileImg: Rectangle7 }],
        admins: [{ name: 'Omer Raz', profileImg: Rectangle7 }]
    })
    const [isAdmin, setIsAdmin] = useState(true)
    return (
        <div className="friends-list">
            {isAdmin ? (
                <div>
                    <h1>New friends</h1>
                    {friendsList.friendRequests.map(friend => {
                        return (
                            <div className="friend-request" key={friend.id}>
                                <div className='friend-request-details'>
                                    <img src={friend.profileImg} alt="profile" />
                                    <p>{friend.name}</p>
                                </div>
                                <div>
                                    <span>Add Friend</span>
                                    |
                                    <span>decline</span>
                                </div>
                            </div>
                        )
                    })}
                    <h1>Friends</h1>
                    {friendsList.friends.map(friend => {
                        return (
                            <div className="friend-request" key={friend.id}>
                                <div className='friend-request-details'>
                                    <img src={friend.profileImg} alt="profile" />
                                    <p>{friend.name}</p>
                                </div>
                                <div>
                                    <span>Remove Friend</span>
                                    |
                                    <span>+ Add as admin</span>
                                </div>
                            </div>
                        )
                    })}
                    <h1>Admin List</h1>
                    {friendsList.admins.map(friend => {
                        return (
                            <div className="friend-request" key={friend.id}>
                                <div className='friend-request-details'>
                                    <img src={friend.profileImg} alt="profile" />
                                    <p>{friend.name}</p>
                                </div>
                                <div>
                                    <span>- Remove admin</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div>
                    <h1>Friends</h1>
                    {friends.friends.map(friend => {
                        return (
                            <div className="friend-request" key={friend.id}>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
export default ENFriendsList