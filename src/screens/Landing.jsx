import React from "react";
// Sections
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./Homepage";
import Login from "./Login";
import AdminLayout from "./AdminLayout";
import Register from "./Register";
import CodeEmail from "./code-email";
import ReferenceRegister from "./Reference-register";

export default function Landing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element= {<Homepage />}>
        </Route>
        <Route path="/login" element= {<Login />}>   
        </Route>
        <Route path="/register" element= {<Register />}>   
        </Route>
        <Route path="/code-email" element= {<CodeEmail />}>   
        </Route>
        <Route path="/reference-register" element= {<ReferenceRegister />}>   
        </Route>
        <Route path="/admin" element= {<AdminLayout />}> 
        </Route>
 
      </Routes>
    </BrowserRouter>
  );
}


