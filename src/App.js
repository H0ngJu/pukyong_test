import './style.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Typepage from './type';

export default function App() {

    return (
      <div className="App">
        <BrowserRouter>
          <Typepage />
          <Routes>
            <Route path={"/type"} element={<Typepage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}
