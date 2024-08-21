import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Group from './pages/Group.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'

const url = createBrowserRouter([
    {
        path: "/",
        element: <Group />,
        errorElement: <NotFound />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={url} />
    </React.StrictMode>,
)
