import "./Home.css";
import "./Quiz/quiz.css";
import "./Result/result.css";
import React, { useEffect } from "react";
//import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizpage1 from "./Quiz/quiz01";
import Resultpage from "./Result/result02";

import Typepage1 from "./Type/type01";
import Typepage2 from "./Type/type02";
import Homepage from "./Home";
import Answerpage1 from "./Answer/answer01";
import Answerpage2 from "./Answer/answer02";
import Answerpage3 from "./Answer/answer03";
import Answerpage4 from "./Answer/answer04";
import Answerpage5 from "./Answer/answer05";
import Answerpage6 from "./Answer/answer06";
import Answerpage7 from "./Answer/answer07";
import Answerpage8 from "./Answer/answer08";
import Answerpage9 from "./Answer/answer09";
import Answerpage10 from "./Answer/answer10";

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
        <Routes>
          <Route path={"/quiz01"} element={<Quizpage1 />}></Route>
          <Route path={"/result"} element={<Resultpage />}></Route>
          <Route path={"/type01"} element={<Typepage1 />}></Route>
          <Route path={"/type02"} element={<Typepage2 />}></Route>
          <Route path={"/answer01"} element={<Answerpage1 />}></Route>
          <Route path={"/answer02"} element={<Answerpage2 />}></Route>
          <Route path={"/answer03"} element={<Answerpage3 />}></Route>
          <Route path={"/answer04"} element={<Answerpage4 />}></Route>
          <Route path={"/answer05"} element={<Answerpage5 />}></Route>
          <Route path={"/answer06"} element={<Answerpage6 />}></Route>
          <Route path={"/answer07"} element={<Answerpage7 />}></Route>
          <Route path={"/answer08"} element={<Answerpage8 />}></Route>
          <Route path={"/answer09"} element={<Answerpage9 />}></Route>
          <Route path={"/answer10"} element={<Answerpage10 />}></Route>
          <Route path={"/"} element={<Homepage />}></Route>
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
