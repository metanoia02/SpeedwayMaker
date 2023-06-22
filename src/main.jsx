import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './Pages/App.jsx'
import Programme from './Pages/Programme.jsx'
import Layout from './Pages/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="programme" element={<Programme />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
