
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import createRouter from './Router/Route'
import React from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createRouter}></RouterProvider>
  </React.StrictMode>,
)
