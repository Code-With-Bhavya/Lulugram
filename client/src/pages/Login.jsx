import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import bgImage from '../assets/bg.jpg';


const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  useEffect(() => {
    if(localStorage.getItem('User')) {
      navigate('/home');
    }
  }, [])
  
  async function HandleLogin(){
    try{
      await axios.post('http://localhost:5000/login', {Email, Password})
    } catch(error){
      console.log(error);
    }
  }

  return (
    <>
<div
  className="bg-cover bg-center wrapper relative w-screen h-screen flex justify-center items-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>    <div className="relative w-[500px] h-[600px] bg-zinc-700 rounded-[30px] flex items-center flex-col ">
      <h1 className="text-white font-bold text-[4em]">Login</h1>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="w-[90%] p-[10px] m-[10px] mt-[10%] rounded-[50px] text-black px-[14px]"/>
        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password"className="w-[90%] p-[10px] m-[10px] rounded-[50px] text-black px-[14px]" />

        <button onClick={HandleLogin} className="bg-green-600 w-[90%] text-white p-[10px] mt-[20px] hover:bg-green-800 rounded-[50px]">Signin</button>

        <p className='text-white absolute bottom-0 p-[40px]'>Dont have a account? <span className='text-red-400'><a href="/Signup" className='font-[600] hover:text-red-500'>Sign up</a></span></p>
      </div>
    </div>
    </>
  )
}

export default Login;