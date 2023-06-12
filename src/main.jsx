import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCreator from "./pages/AddCreator"
import EditCreator from "./pages/EditCreator"
import ShowCreators from "./pages/ShowCreators"
import ViewCreator from "./pages/ViewCreator"
import Hero from "./pages/Hero"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Hero />
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route index={false} path="/new" element={<AddCreator />} />
        <Route index={false} path="/:id" element={<ViewCreator />} />
        <Route index={false} path="/edit/:id" element={<EditCreator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
