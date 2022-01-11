import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
export const UserAndprofiles = () => {
    const [data, setData] = React.useState([])
    const id = useParams().id;
    useEffect(() => {
        fetchuserprofiles()
    }, [])
    const fetchuserprofiles = async () => {
        const res = await axios.get(`/api/profile/getallprofileofSingleUser/${id}`);
        
        setData(res.data)
    }
    console.log(data)
    return <>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div>
                <h1>hello</h1>
                <p>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            </div>
            <div>
                <button>notificaction</button>
            </div>
            
        </div>
        <div>
                {data && data.length > 0 && data.map((userProfiles => {
                    return <div>
                        <img style={{width:'100px',height:'100px'}} src={`http://localhost:8800/${userProfiles.wallImg}`} alt="" />
                        <p>{userProfiles.firstName}</p>
                        
                    </div>
                }))}
            </div>
    </>
}
