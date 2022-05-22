import {connect} from "react-redux";
import {Expenses} from "./Expenses";
import {addProductAC, ProductType, removeProductAC} from "../../Redux/expenses-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsType = {
    expensesPage: Array<ProductType>
}

export type MapDispatchToPropsType = {
    addProduct: (id: string, name: string, price: number, monthOfPurchase: string, cash: boolean) => void
    removeProduct: (id: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        expensesPage: state.expensesPage.products
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addProduct: (id: string, name: string, price: number, monthOfPurchase: string, cash: boolean) => {
            dispatch(addProductAC(id, name, price, monthOfPurchase, cash))
        },
        removeProduct: (id: string) => {
            dispatch(removeProductAC(id))
        }
    }
}

export const ExpensesContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Expenses)