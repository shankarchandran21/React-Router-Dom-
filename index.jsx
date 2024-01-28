import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet
} from "react-router-dom"

import Layout from "./Layout"
import AuthRequired from "./AuthRequired"
import Login from "./Login"


/*
1.We are not using loader in this so we can make ProductRoute in BrowserRouter 
also like this.
2.We use Fake Auth

*/ 


const router = createBrowserRouter(createRoutesFromElements(

  <Route element={<Outlet/>}>
          
    <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home page</h1>} />
        
        {/* Here We provide productRouter for only protected route only  */}
        <Route element={<AuthRequired />}>
          <Route path="protected" element={<h1>Super secret info here</h1>} />
        </Route>
        
      </Route>
        <Route path="/login" element={<Login/>} />


  </Route>

 
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)