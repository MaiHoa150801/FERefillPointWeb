import React from "react";
// Sections
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./Homepage";
import Login from "./Login";

export default function Landing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element= {<Homepage />}>
        </Route>
        <Route path="/login" element= {<Login />}>   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


