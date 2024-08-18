import React from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const Navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('User'));
  let name = storedUser.Name
  let firstLetter = name.charAt(0);

  function logout() {
    Navigate('/login');
    localStorage.clear();
  }

  return (
    <>
      <div id='nav__con' className='relative h-screen w-[26%] bg-[#09090A] items-center overflow-y-hidden'>
        {/* logo */}
        <img className='relative w-[68%] m-auto mt-[1.4em]' src={logo} alt="" />

        <div onClick={()=> Navigate('/Profile')} id='dets__con' className='relative flex m-auto w-[90%] gap-[20px] mt-[30px] bg-[#111] hover:bg-[#2D2D2D] cursor-pointer py-[20px]  rounded-[12px] items-center justify-center'>
          <div className="icon w-[60px] h-[60px] rounded-[50px] bg-red-400 flex items-center justify-center"><p className="text-white text-[2em]">{firstLetter.toUpperCase()}</p></div>
          <div id='dets' className="flex-col">
            <h1 className='text-white font-medium text-[1.6em]'>{storedUser.Name}</h1>
            <p className='text-[#B5B5B5] mt-[-10px]'>@{storedUser.Username}</p>
          </div>
        </div>

        <div className='Links w-full min-h-[67vh] flex flex-col justify-between'>
          <div className="main__links">
            <div id='link' onClick={()=> Navigate('/home')} className="relative flex gap-[10px] items-center justify-start px-[30px] home w-[80%] h-[60px] bg-red-500 m-auto mt-[2em] hover:bg-[#FF4B50] cursor-pointer rounded-[10px]">
              <i className="ri-home-2-line ri-xl text-white"></i>
              <h1 className='text-white text-[1.2em]'>Home</h1>
            </div>

            <div id='link' onClick={()=> Navigate('/profile')} className="relative flex gap-[10px] items-center justify-start px-[30px] home w-[80%] h-[60px] m-auto mt-[2em] hover:bg-[#FF4B50] cursor-pointer rounded-[10px]">
              <i className="ri-user-3-fill ri-xl text-red-500"></i>
              <h1 className='text-white text-[1.2em]'>Profile</h1>
            </div>

            <div id='link' onClick={()=> Navigate('/create')} className="relative flex gap-[10px] items-center justify-start px-[30px] home w-[80%] h-[60px] m-auto mt-[2em] hover:bg-[#FF4B50] cursor-pointer rounded-[10px]">
              <i className="ri-image-add-fill ri-xl text-red-500"></i>
              <h1 className='text-white text-[1.2em]'>Create</h1>
            </div>
          </div>

          <div className="logout w-full flex justify-center">
            <div className="flex gap-[10px] items-center justify-start px-[30px] home w-[80%] h-[60px] cursor-pointer rounded-[10px]">
              <i className="ri-logout-box-line ri-xl text-red-500"></i>
              <a onClick={logout} className='text-white text-[1.2em]'>Logout</a>
            </div>
          </div>
        </div>
      </div>

      <div id="navBottom" className='absolute flex bottom-0 w-full h-[5em] bg-[#111] justify-between px-[16px] items-center'>
       <div id="icon_con" className='px-[10px] h-[80%] rounded-[14px] gap-[10px] bg-[#FF4B50] items-center flex flex-col justify-center'>
        <i className="ri-home-2-line ri-xl text-white"></i>
        <p className='text-white text-[0.9em]'>Home</p>
       </div>

       <div id="icon_con" className='px-[10px] h-[80%] rounded-[14px] gap-[10px] items-center flex flex-col justify-center'>
        <i class="ri-sticky-note-add-line ri-xl text-[#FF4B50]"></i>
        <p className='text-white text-[0.9em]'>Create</p>
       </div>

       <div id="icon_con" className='px-[10px] h-[80%] rounded-[14px] gap-[10px] items-center flex flex-col justify-center'>
        <i className="ri-user-3-fill ri-xl text-[#FF4B50]"></i>
        <p className='text-white text-[0.9em]'>Profile</p>
       </div>
      </div>
    </>
  )
}

export default Nav