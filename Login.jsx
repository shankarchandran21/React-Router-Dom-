import React from 'react'
import { useLoaderData} from 'react-router-dom'
export const loader = ({request})=>{
    let message = new URL(request.url).searchParams.get("message")
    console.log(message)
    return message
}


function Login() {
const message =  useLoaderData()





  return (
   <>
    <h1>Login</h1>
    {message&&(<p>{message}</p>)}
    
   </>
  )
}

export default Login