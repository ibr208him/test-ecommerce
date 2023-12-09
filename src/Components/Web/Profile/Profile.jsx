import React, { useContext } from 'react'
import { UserContext } from './../Context/UserContext';
import './Profile.css'
import { Link } from 'react-router-dom';

export default function Profile() {

    let {userDetails,setUserDetails}=useContext(UserContext);
    console.log(userDetails);
  return (
<div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
  <div className="card p-4">
    <div className="image d-flex flex-column justify-content-center align-items-center text-center">
      <button className="btn btn-secondary">
        <img src={userDetails.image.secure_url} height={100} width={100}/>
      </button>

      
      <span className="name mt-3">Username: {userDetails.userName}</span>
      <span className="name mt-3">Email Address: {userDetails.email}</span>
      <Link to='/sendcode'>Update Password</Link>
   

    </div>
  </div>
</div>


  )
}
