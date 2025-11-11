import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </RootLayout>
  );
}
