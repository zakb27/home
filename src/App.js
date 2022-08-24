import './App.css';
import React, {useState} from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Opening from "./pages/Opening";
import Main from './pages/Main'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element = {<Opening />}/>
                <Route path={'/main'} element = {<Main />}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
