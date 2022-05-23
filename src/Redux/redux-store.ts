import {combineReducers, createStore} from "redux";
import expensesReducer from "./expenses-reducer";
import salaryReducer from "./salary-reducer";

export type AppStateType = ReturnType<typeof reducers>

let reducers =combineReducers({
    expensesPage: expensesReducer,
    salaryPage: salaryReducer
})

export let store = createStore(reducers)