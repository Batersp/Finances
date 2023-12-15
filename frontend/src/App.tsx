import React from 'react';
import 'src/App.css';
import {Routes, Route} from "react-router-dom";
import {Header} from "src/components/Header/Header";
import {Body} from "src/components/Body/Body";
import {Accumulation} from "src/components/Accumulation/Accumulation";
import {ExpensesContainer} from "src/components/Expenses/ExpensesContainer";
import {SalaryContainer} from "src/components/Salary/SalaryContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                <Routes>
                    <Route path={'/Finances'} element={<Body/>}/>
                    <Route path={'/expenses'} element={<ExpensesContainer/>}/>
                    <Route path={'/salary'} element={<SalaryContainer/>}/>
                    <Route path={'/accumulation'} element={<Accumulation/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
