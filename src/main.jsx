import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./Router/SwiftShiftRouter.jsx";
import {Toaster} from "react-hot-toast";
import 'aos/dist/aos.css'; 
import Aos from 'aos';

Aos.init({
  delay: 10,
  duration: 400
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="max-w-screen-xl p-2 md:p-0 mx-auto urbanist ">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  </StrictMode>,
)
