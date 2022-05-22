import {combineReducers, createStore} from "redux";
import expensesReducer from "./expenses-reducer";

export type AppStateType = ReturnType<typeof reducers>

let reducers =combineReducers({
    expensesPage: expensesReducer
})

export let store = createStore(reducers)