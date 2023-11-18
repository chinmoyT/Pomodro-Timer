import React from 'react'
import logo from '../img/chronometer.png'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import {auth} from "../config/firebase";
import { useNavigate } from 'react-router-dom';
const Navbar = (props) => {
  const navigate=useNavigate();
  const handleOnClick=()=>{
     signOut(auth).then(()=>{
      navigate("/");
      props.setSuccess(false);
     })
  }
  return (
    <nav className="flex bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 h-16">
      <div className="flex w-[100vw] justify-between">
        <div className='flex gap-x-3'>
          <img src={logo} alt="Pomodrop Logo" className="h-8 mr-2" />
          <h1 className="text-xl font-bold">Pomodrop</h1>
        </div>
        <button onClick={handleOnClick} className={`text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 px-4 py-2 rounded-lg transition-all duration-300 ${props.success?"":"hidden  "}`}>Sign Out</button>
      </div>
    </nav>
  )
}

export default Navbar
