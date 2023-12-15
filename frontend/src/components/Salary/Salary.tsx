import React from "react";
import style from 'src/components/Salary/Salary.module.css'
import {MapDispatchToPropsType, MapStateToPropsType} from "src/components/Salary/SalaryContainer";

export const Salary = (props: MapStateToPropsType & MapDispatchToPropsType) => {
    return (
        <div>
            {props.salaryPage.zp.map(el => <div key={el.id}>
                <span> {el.year} </span>
                <span> {el.mounth} </span>
                <span> {el.summa} </span>
            </div>)}
        </div>
    )
}
