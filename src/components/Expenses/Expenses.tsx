import React from "react";
import style from './Expenses.module.css'
import {MapDispatchToPropsType, MapStateToPropsType} from "./ExpensesContainer";

export const Expenses = (props: MapStateToPropsType & MapDispatchToPropsType) => {
    return(
        <div>
            {props.expensesPage.map(el => <div key={el.id}>
                <span> {el.name} </span>
                <span> {el.price} </span>
            </div>)}
            <div>
                <ul>Продукты, купленные безналичным рассчетом:
                    {props.expensesPage.filter(el => !el.cash).map(el => <li key={el.id}>{el.name}</li>)}
                </ul>

            </div>
        </div>
    )
}