import React, { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BreakTimer from './components/BreakTimer'
import Register from './components/Register'
import Login from './components/Login'
import Page from './components/Page'

const App = () => {
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({})
  return (
    <div>
      <Navbar user={user} success={success} setSuccess={setSuccess} />
      <Routes>
        {success ?
          <>
            < Route path='/home' element={<Home />} />
            <Route path='/break-time' element={<BreakTimer />} />
          </> :
          ""
        }

        <Route exact path='/' element={<Register setUser={setUser} />} />
        <Route exact path='/login' element={<Login setSuccess={setSuccess} />} />
      </Routes>
    </div>
  )
}

export default App
