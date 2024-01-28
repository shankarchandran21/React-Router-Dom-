import React from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function AuthRequired() {
        let fakeAuth = true

        if(fakeAuth){
            // using state we can send messages to login page 
            return<Navigate to="/login" state={{message:"You must login first"}}/>
        }

    return <Outlet />
}