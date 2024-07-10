import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cartpage from './pages/Cartpage.jsx'
import Checkout from './pages/Checkout.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
  {
    path: "/Cartpage",
    element: <Cartpage />,
  },

  {
    path: "/Checkout",
    element: <Checkout />,
  },
  

 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/> ,
  
  </React.StrictMode>,
)
