import {combineReducers, legacy_createStore as  createStore} from "redux";
import expensesReducer from "src/Redux/expenses-reducer";
import salaryReducer from "src/Redux/salary-reducer";

export type AppStateType = ReturnType<typeof reducers>

let reducers =combineReducers({
    expensesPage: expensesReducer,
    salaryPage: salaryReducer
})

export let store = createStore(reducers)
