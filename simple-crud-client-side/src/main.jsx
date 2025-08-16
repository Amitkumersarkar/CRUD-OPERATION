import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ClientSide from './Components/ClientSide';
import Users from './Components/Users';
import Update from './Components/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientSide></ClientSide>,
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
