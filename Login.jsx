import React from 'react'
import { useLocation } from 'react-router-dom'

function Login() {
const information =  useLocation()
console.log(information)


  return (
    <div>Login</div>
  )
}

export default Login