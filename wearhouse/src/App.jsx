import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './commpont/Layout/Layout'
import Login from './commpont/Login/Login'
import Register from './commpont/Register/Register'
import Home from './commpont/Home/Home'

function App() {
  const routr=createBrowserRouter([{path:'',element:<Layout/>,children:[
    {index:true,element:<Login/>},
    {path:'register',element:<Register/>},
    {path:'home',element:<Home/>}
  ]}])

  return (
    <>
     <RouterProvider router={routr}>
     </RouterProvider>
    </>
  )
}

export default App
