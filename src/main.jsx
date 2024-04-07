import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import JavaScript from './routes/JavaScript.jsx';
import Go from './routes/Go.jsx';
import TypeScript from './routes/TypeScript.jsx';
import Ruby from './routes/Ruby.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App language ="Language" />
    },
    {
      path: "/javascript",
      element: <JavaScript />
    },
    {
      path: "/go",
      element: <Go />
    },
    {
      path: "/typescript",
      element: <TypeScript />
    },
    {
      path: "/ruby",
      element: <Ruby />
    }
    
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
