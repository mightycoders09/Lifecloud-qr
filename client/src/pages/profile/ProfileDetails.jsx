import React, { useState } from 'react';
import profile from './dummy-profiles.json';
import './profiledetails.css'
// import { useParams } from 'react-router-dom';
export default function Profile() {
//   const [profile, setProfile] = useState(profileDetails[0]);
//   const [show, setShow] = useState('false');
//   const { id } = useParams();
  //   setProfile(
  //     profileDetails.filter((profile) => console.log(profile.id === id))
  //   );
  //   console.log(profile);
  return (
    <div>
      <img src={profile[0].coverImg} alt="" className="profile-cover"></img>
      <div className='profile-details'>
        <img src={profile[0].profileImg} alt="" className="profile-img"></img>
        <div>
          <h1>{profile[0].name}</h1>
          <p>
            {profile[0].birthDate} - {profile[0].deathDate}
          </p>
          <p>{profile[0].city}</p>
        </div>
      </div>
      <div>
        <div>
          <div>Update me</div>
          <div>+ Add Friend</div>
          <div>Friends list</div>
        </div>
        <div>
          {/* <div onClick={setShow('false')}>Biography</div>
          <div onClick={setShow('true')}>Wall</div> */}
        </div>
        {/* <div className={`${!show && 'd-none'}`}>Wall</div>
        <div className={`${show && 'd-none'}`}>Biography</div> */}
      </div>
    </div>
  );
}
