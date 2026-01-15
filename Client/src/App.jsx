import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Hero />
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
    </Routes>
    </BrowserRouter>
  );
}