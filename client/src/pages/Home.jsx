import React from 'react'
import Nav from '../components/Nav'
import Posts from '../components/Posts'
import { useState, useEffect } from 'react';

const Home = () => {
  const storedUser = JSON.parse(localStorage.getItem('User'));

  return (
    <div className='flex bg-black color-white h-screen'>
      <Nav/>
      <Posts/>
    </div>
  )
}

export default Home;