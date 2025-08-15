import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ClientSide from './Components/ClientSide';
const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientSide></ClientSide>,
    children: [
      {

      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
