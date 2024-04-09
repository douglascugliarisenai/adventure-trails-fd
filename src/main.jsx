import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const routers = createBrowserRouter([
  {
    path:"/",
    element: 
  },
  {
    path:"/trilhas",
    element: 
  },
  {
    path:"/cadastro",
    element: 
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}>

  </RouterProvider>
)
