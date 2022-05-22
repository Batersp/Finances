import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";
import {Salary} from "./components/Salary/Salary";
import {Accumulation} from "./components/Accumulation/Accumulation";
import {ExpensesContainer} from "./components/Expenses/ExpensesContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                <Routes>
                    <Route path={'/'} element={<Body/>}/>
                    <Route path={'/expenses'} element={<ExpensesContainer/>}/>
                    <Route path={'/salary'} element={<Salary/>}/>
                    <Route path={'/accumulation'} element={<Accumulation/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
