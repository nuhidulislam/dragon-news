import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider
} from "react-router-dom";


import Rauter from './components/Routes/Rauter';
import AuthProvider from './components/Provider/AuthProvider';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Rauter} />
    </AuthProvider>
  </StrictMode>,
)
