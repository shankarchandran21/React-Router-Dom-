import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import "./server"





/*
1.it will goes on like this using createBrowserRouter we want create route like this only
,Children used for nested routes

  const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>, 
    children:[ 
      {
        index,
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      }
    ] 
  }
])

2.there is another way also we will create that way in that we will use createRoutesFormElements
we will give that in side createBrowserRouter. We will see that in below
*/

//createRoutesFromElements will convert Route components to object like above router
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="vans" element={<Vans />} />
  <Route path="vans/:id" element={<VanDetail />} />
  
  <Route path="host" element={<HostLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="vans" element={<HostVans />} />
    <Route path="vans/:id" element={<HostVanDetail />}>
      <Route index element={<HostVanInfo />} />
      <Route path="pricing" element={<HostVanPricing />} />
      <Route path="photos" element={<HostVanPhotos />} />
    </Route>
  </Route>
</Route>
))













function App() {
  return (
    <RouterProvider router={router}/>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
