import './App.css';
import React, {useState} from "react";
import {HashRouter, BrowserRouter, Route,Routes } from "react-router-dom";
import Opening from "./pages/Opening";
import Main from './pages/Main'

function App() {

  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route path={'/'} element = {<Opening />}/>
                <Route path={'/main'} element = {<Main />}/>
            </Routes>
        </HashRouter>

    </div>
  );
}

export default App;
