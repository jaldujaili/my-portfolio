import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing } from './components/Landing/Landing'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

const router = createBrowserRouter([
  {
    path: "my-portfolio/",
    element: <App />,
    children: [
      {
        path: "/my-portfolio/",
        element: <Landing />,
      },
      {
        path: "/my-portfolio/about",
        element: <About />,
      },
      {
        path: "/my-portfolio/experience",
        element: <Experience />,
      },
      {
        path: "/my-portfolio/projects",
        element: <Projects />,
      },
      {
        path: "/my-portfolio/contact",
        element: <Contact />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
