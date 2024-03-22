import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import FindTherapist from "./pages/FindTherapist"

export default function App() {

  const [user,setUser]=useState({})

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register setUser={setUser}/>} />
        <Route path="/login" element={<Login user={setUser}/>} />
        <Route path="/chat" element={<Chat user={user}/>} />
        <Route path="/cousellor" element={<FindTherapist user={user}/>} />
      </Routes>
    </BrowserRouter>
  );
}
