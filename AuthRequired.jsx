import React from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function AuthRequired() {
        let fakeAuth = true

        if(fakeAuth){
            return<Navigate to="/login"/>
        }

    return <Outlet />
}