import React, { useState } from 'react'
import {auth, googleProvider} from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom' ;
import "./Register.css";


const Register = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState("")
    const onSubmit = async (e) => {
      e.preventDefault()
  
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // props.setSuccess(true);
          props.setUser(auth)
          signOut(auth);
          navigate("/login");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
  
    }
    const signInwithGoogle = async ()=> {
        try{
            await signInWithPopup(auth, email);
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <div className="parent">
      {/* <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Signin</button>
      <button onClick={signInWithGoogle}> Signin with google</button>
      <button onClick={logOut}> logOut</button> */}
       <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign In Form</h2>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={onSubmit}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Sign In
        </button>
        <p className="text-black">
          Already have an account?{' '}
          <NavLink to="/login" className="text-blue-500">
            Log In
          </NavLink>
        </p>
      </div>
    </form>
    </div>
  )
}

export default Register;