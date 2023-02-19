import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import Mail from "../routes/Mail/Mail";

const App = () => {

    return (
        <div className="app">
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/mail" element={<Mail/>} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default App;