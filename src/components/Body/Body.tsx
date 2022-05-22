import React from "react";
import style from './Body.module.css'
import {NavLink} from "react-router-dom";

export const Body = () => {
    return (
        <div className={style.body}>
            <div className={`${style.expenses} ${style.item}`}><NavLink to={'/expenses'}> Expenses</NavLink></div>
            <div className={`${style.salary} ${style.item}`}><NavLink to={'/salary'}>Salary</NavLink></div>
            <div className={`${style.accumulation} ${style.item}`}><NavLink to={'/accumulation'}>Accumulation</NavLink></div>
            <div className={style.photo}><img className={style.img}
                                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfX3Yv3C_XPgw3TBiIEAs0dw4kYvGV3RPJ7Q&usqp=CAU"/>
            </div>
        </div>
    )
}



