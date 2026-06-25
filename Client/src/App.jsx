import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AiAsk from "./pages/AiAsk";
import Personalization from "./pages/Personalize";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/personalize" element={<Personalization/>} />

        <Route path="/ai-ask" element={<AiAsk />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}