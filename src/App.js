import './Home.css';
import React,{useEffect} from 'react';
//import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Typepage from './type';
import Homepage from './Home';
//import { BrowserView, MobileView } from 'react-device-detect';


export default function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
    return (
      <div className="Home">
        <BrowserRouter>
          <Homepage />
          <Routes>
            <Route path={"/home"} element={<Homepage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
    // return (
    //   <div className="type">
    //     <BrowserRouter>
    //       <Typepage />
    //       <Routes>
    //         <Route path={"/type"} element={<Typepage/>}></Route>
    //       </Routes>
    //     </BrowserRouter>
    //   </div>
    // );
}
