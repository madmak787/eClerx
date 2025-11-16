import React from 'react'
import RootLayout from './layout/RootLayout'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

function App() {
  return (
    <Routes>
      {/* Login route (no layout) */}
      <Route path="/login" element={<Login />} />

      {/* Layout wrapper */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
