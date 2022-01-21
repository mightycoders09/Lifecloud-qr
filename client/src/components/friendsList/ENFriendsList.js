import React, { useState, useEffect } from 'react'
import './friendslist.css'
import Rectangle7 from '../../assets/Rectangle7.png'
import axios from 'axios'
const ENFriendsList = ({ proid, profiledata, setrfriendReq }) => {
    const [friendsList, setFriendsList] = useState({
        friendRequests: [{ name: 'Omer Raz', profileImg: Rectangle7 }],
        friends: [{ name: 'Omer Raz', profileImg: Rectangle7 }],
        admins: [{ name: 'Omer Raz', profileImg: Rectangle7 }]
    })
    const [userid, setuserid] = useState('')

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])
    const fetchUsers = async () => {
        const res = await axios.get(`/api/users/all/every`);
        setUsers(res.data)
    }
    console.log(users)
    const [isAdmin, setIsAdmin] = useState(true)
    const handleAddFriend = (e) => {
        console.log(e, proid, 'e')
        setuserid(e)
        fetch(`/api/profile/addFriends/${proid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({ isFriend: false, userId: e }),
        })
            .then((res) => {
                return res.json();
            }).then(res => {
                console.log(res, 'res')
                setrfriendReq(res)
            })


    }
    const handleAddFrined = (e) => {
        // setuserid(e)
       
        fetch(`/api/profile/addAcceptFriends/${proid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({ isFriend: true, userId: e._id,user: e.user[0]._id }),
        })
            .then((res) => {
                return res.json();
            }).then(res => {
                console.log(res, 'res')
                setrfriendReq(res)
            })


    }
    console.log(profiledata, 'profiledata list')
    let valchek = profiledata && profiledata.addFriends.length > 0 && profiledata.addFriends.map(item => {
        return item.user
    })
    console.log(valchek, 'user')
    let e = users.map(n => valchek && valchek.includes(n._id))
    // let result = profiledata && profiledata.addFriends.length > 0 && profiledata.addFriends.includes(userid)
    console.log(e, 'e')
    return (
        <div className="friends-list">
            {isAdmin ? (
                <div>
                    <h1>New friends</h1>
                    {profiledata &&profiledata.addFriends.length > 0 && profiledata.addFriends.map((friend,i) => {
                        return (
                            <div className="friend-request" key={friend.user && friend.user[0].id}>
                                <div className='friend-request-details'>
                                    <img src={friend.profileImg} alt="profile" />
                                    <p>{friend.user && friend.user[0].firstName}</p>
                                </div>
                                <div>
                                    <span style={{ cursor: 'pointer' }} onClick={()=>handleAddFrined(friend)}>Add Friend</span>
                                    |
                                    <span style={{ cursor: 'pointer' }}>decline</span>
                                </div>
                            </div>
                        )
                    })}
                    <h1>Friends</h1>
                    {users && users.length > 0 && users.map((user, i) => {
                        // console.log(e[i] == true, 'valchek[user._id]')
                        return (
                            <div className="friend-request" key={user._id}>
                                <div className='friend-request-details'>
                                    <img src={Rectangle7} alt="profile" />
                                    <p>{user.firstName}</p>
                                </div>
                                <div>


                                    {/* <span onClick={() => handleAddFriend(user._id)} style={{ cursor: 'pointer' }}>Remove Friend</span> */}
                                    {e[i] ? <span onClick={() => handleAddFriend(user._id)} style={{ cursor: 'pointer' }}>Remove Friend</span> : <span onClick={() => handleAddFriend(user._id)} style={{ cursor: 'pointer' }}>Add Friend</span>}



                                    |
                                    <span style={{ cursor: 'pointer' }}>+ Add as admin</span>
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
                    {/* {friends.friends.map(friend => {
                        return (
                            <div className="friend-request" key={friend.id}>
                            </div>
                        )
                    })} */}
                </div>
            )}
        </div>
    )
}
export default ENFriendsList