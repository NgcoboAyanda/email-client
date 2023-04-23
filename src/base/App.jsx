import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import Mail from "../routes/Mail/Mail";

const App = () => {

    return (
        <div className="app">
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Mail/>} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default App;