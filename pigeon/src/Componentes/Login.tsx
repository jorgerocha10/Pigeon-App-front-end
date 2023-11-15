import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignInSide from './SignInSide'
import Dashboard from './Dashboard/Dashboard'
import { LoginCreateUser } from './LoginCreateUser'
import { LoginPasswordLost } from './LoginPasswordLost'

export default function Login(){
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignInSide/>}></Route>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/create' element={<LoginCreateUser />} />
        <Route path='/forget' element={<LoginPasswordLost />} />
        <Route path='/reset'  element={<LoginPasswordLost />}/>
      </Routes>
    </div>
  )
}
