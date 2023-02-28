import "./Home.css";
import "./quiz.css";
import "./result.css";
import React, { useEffect } from "react";
//import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Quizpage from './quiz';
import Resultpage from "./result_2";
//import Homepage from './Home';

export default function Result() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div className="Result">
      <BrowserRouter>
        <Resultpage />
        <Routes>
          <Route path={"/result"} element={<Resultpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  // return (
  //   <div className="Quiz">
  //     <BrowserRouter>
  //       <Quizpage />
  //       <Routes>
  //         <Route path={"/quiz"} element={<Quizpage/>}></Route>
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );
  // return (
  //   <div className="Home">
  //     <BrowserRouter>
  //       <Homepage />
  //       <Routes>
  //         <Route path={"/home"} element={<Homepage/>}></Route>
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );
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
