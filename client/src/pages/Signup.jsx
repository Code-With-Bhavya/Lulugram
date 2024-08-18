import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import bgImage from '../assets/bg.jpg';


const Signup = () => {
  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function HandleSubmit(){
    try {
      await axios.post('http://localhost:5000/signup',{name, username, email, password});
      let User = {
        Name: name,
        Username: username,
        Email: email,
        Password: password,
      }
      localStorage.setItem('User', JSON.stringify(User));
      navigate('/home')
      setMessage('User created successfully');
    } 
     catch (error) {

      if(error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again.");
      }
  
      console.error('There was an error creating the user!', error); // Optional for debugging
    }
  }
  
  return (
    <>
<div
  className="bg-cover bg-center wrapper relative w-screen h-screen flex justify-center items-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>

    <div className="relative w-[500px] h-[600px] bg-zinc-700 rounded-[30px] flex items-center flex-col ">
      <h1 className="text-white font-bold text-[4em]">Sign Up</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name" className="w-[90%] p-[10px] m-[10px] mt-[10%] rounded-[50px] text-black px-[14px]"/>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username"className="w-[90%] p-[10px] m-[10px] rounded-[50px] text-black px-[14px]" />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"className="w-[90%] p-[10px] m-[10px] rounded-[50px] text-black px-[14px]" />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"className="w-[90%] p-[10px] m-[10px] rounded-[50px] text-black px-[14px]" />

        <p className={message.includes('successfully') ? "text-green-400" : "text-red-400"}>{message}</p>
        <button onClick={HandleSubmit} className="bg-green-600 w-[90%] text-white p-[10px] mt-[20px] hover:bg-green-800 rounded-[50px]">Signin</button>
        <p className='text-white absolute bottom-0 p-[40px]'>Alredy have a account? <span className='text-red-400'><a href="/Login" className='font-[600] hover:text-red-500'>Login</a></span></p>

      </div>
    </div>
    </>
  );
};

export default Signup;
