import { useState } from 'react'
import React from "react";
import './assets/css/style.css'
import Header from "./assets/components/Header.jsx";
import Main from "./assets/components/Main.jsx";
import Footer from "./assets/components/Footer.jsx";
import Register from './assets/components/Register.jsx';
import Login from './assets/components/Login.jsx';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import AuthProvider from './AuthProvider.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import Private from './Private.jsx';
import Public from './Public.jsx';

function App() {
  return (
    <>
    <div className="app-container">
      <AuthProvider>
        <BrowserRouter>
          
          <Header />

          <div className="main-content">
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/register' element={<Public><Register/></Public>} />
              <Route path='/login' element={<Public><Login/></Public>} />
              <Route path='/dashboard' element={<Private><Dashboard/></Private>} />
            </Routes>
          </div>

          <Footer />

        </BrowserRouter>
      </AuthProvider>
    </div>
  
    </>
      
  )
}

export default App
