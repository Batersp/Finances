import {connect} from "react-redux";
import {Salary} from "src/components/Salary/Salary";
import {AppStateType} from "src/Redux/redux-store";
import {addZpAC, InitialStateType} from "src/Redux/salary-reducer";
import {Dispatch} from "redux";


export type MapStateToPropsType = {
    salaryPage: InitialStateType
}

export type MapDispatchToPropsType = {
    addZp: (year: number, mounth: string, summa: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
     salaryPage: state.salaryPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsType => {
    return {
        addZp: (year: number, mounth: string, summa: number) => {
            dispatch(addZpAC(year, mounth, summa))
        }
    }
}

export const SalaryContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Salary)
