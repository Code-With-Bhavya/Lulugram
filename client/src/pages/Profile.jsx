import React from 'react'
import Nav from '../components/Nav'
import User from '../components/User'
const Profile = () => {
  return (
    <div className='flex bg-black color-white h-screen'>
      <Nav/>
      <User/>
    </div>  
  )
}

export default Profile