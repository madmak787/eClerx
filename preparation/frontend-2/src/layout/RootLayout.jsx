import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
        <header style={{ padding: 20, background: "#eee" }}>
            <h2>My App</h2>
            <nav style={{ display: "flex", gap: 10 }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
        <div><Outlet /></div>
    </>
  )
}
export default RootLayout