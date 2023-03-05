import "./Home.css";
import "./Quiz/quiz.css";
import "./Result/result.css";
import React, { useEffect } from "react";
//import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizpage1 from "./Quiz/quiz01";
import Quizpage2 from "./Quiz/quiz02";
import Quizpage3 from "./Quiz/quiz03";
import Quizpage4 from "./Quiz/quiz04";
import Quizpage5 from "./Quiz/quiz05";
import Quizpage6 from "./Quiz/quiz06";
import Quizpage7 from "./Quiz/quiz07";
import Quizpage8 from "./Quiz/quiz08";
import Quizpage9 from "./Quiz/quiz09";
import Quizpage10 from "./Quiz/quiz10";
import Quizpage11 from "./Quiz/quiz11";
import Quizpage12 from "./Quiz/quiz12";
import Quizpage13 from "./Quiz/quiz13";
import Quizpage14 from "./Quiz/quiz14";
import Quizpage15 from "./Quiz/quiz15";
import Quizpage16 from "./Quiz/quiz16";
import Quizpage17 from "./Quiz/quiz17";

import Resultpage1 from "./Result/result01";

import Typepage1 from "./Type/type01";
import Typepage2 from "./Type/type02";
import Typepage3 from "./Type/type03";
import Typepage4 from "./Type/type04";
import Typepage5 from "./Type/type05";
import Typepage6 from "./Type/type06";

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
import Answerpage11 from "./Answer/answer11";
import Answerpage12 from "./Answer/answer12";
import Answerpage13 from "./Answer/answer13";
import Answerpage14 from "./Answer/answer14";
import Answerpage15 from "./Answer/answer15";
import Answerpage16 from "./Answer/answer16";
import Answerpage17 from "./Answer/answer17";
import Answerpage18 from "./Answer/answer18";
import Answerpage19 from "./Answer/answer19";
import Answerpage20 from "./Answer/answer20";

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
          <Route path={"/quiz02"} element={<Quizpage2 />}></Route>
          <Route path={"/quiz03"} element={<Quizpage3 />}></Route>
          <Route path={"/quiz04"} element={<Quizpage4 />}></Route>
          <Route path={"/quiz05"} element={<Quizpage5 />}></Route>
          <Route path={"/quiz06"} element={<Quizpage6 />}></Route>
          <Route path={"/quiz07"} element={<Quizpage7 />}></Route>
          <Route path={"/quiz08"} element={<Quizpage8 />}></Route>
          <Route path={"/quiz09"} element={<Quizpage9 />}></Route>
          <Route path={"/quiz10"} element={<Quizpage10 />}></Route>
          <Route path={"/quiz11"} element={<Quizpage11 />}></Route>
          <Route path={"/quiz12"} element={<Quizpage12 />}></Route>
          <Route path={"/quiz13"} element={<Quizpage13 />}></Route>
          <Route path={"/quiz14"} element={<Quizpage14 />}></Route>
          <Route path={"/quiz15"} element={<Quizpage15 />}></Route>
          <Route path={"/quiz16"} element={<Quizpage16 />}></Route>
          <Route path={"/quiz17"} element={<Quizpage17 />}></Route>

          <Route path={"/result01"} element={<Resultpage1 />}></Route>

          <Route path={"/type01"} element={<Typepage1 />}></Route>
          <Route path={"/type02"} element={<Typepage2 />}></Route>
          <Route path={"/type03"} element={<Typepage3 />}></Route>
          <Route path={"/type04"} element={<Typepage4 />}></Route>
          <Route path={"/type05"} element={<Typepage5 />}></Route>
          <Route path={"/type06"} element={<Typepage6 />}></Route>

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
          <Route path={"/answer11"} element={<Answerpage11 />}></Route>
          <Route path={"/answer12"} element={<Answerpage12 />}></Route>
          <Route path={"/answer13"} element={<Answerpage13 />}></Route>
          <Route path={"/answer14"} element={<Answerpage14 />}></Route>
          <Route path={"/answer15"} element={<Answerpage15 />}></Route>
          <Route path={"/answer16"} element={<Answerpage16 />}></Route>
          <Route path={"/answer17"} element={<Answerpage17 />}></Route>
          <Route path={"/answer18"} element={<Answerpage18 />}></Route>
          <Route path={"/answer19"} element={<Answerpage19 />}></Route>
          <Route path={"/answer20"} element={<Answerpage20 />}></Route>
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
