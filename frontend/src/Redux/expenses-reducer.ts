import {v1} from "uuid";

const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'


export type ProductType = {
    id: string
    name: string
    price: number
    monthOfPurchase: string
    cash: boolean
}

export type InitialStateType = {
    products: Array<ProductType>
}

let initialState: InitialStateType = {
    products: [
        {id: v1(), name: 'Milk', price: 1.68, monthOfPurchase: 'May', cash: false},
        {id: v1(), name: 'Sugar', price: 2.05, monthOfPurchase: 'April', cash: true},
        {id: v1(), name: 'Tea', price: 3.25, monthOfPurchase: 'May', cash: false},
        {id: v1(), name: 'Bananas', price: 6.27, monthOfPurchase: 'February', cash: true},
        {id: v1(), name: 'Сheese', price: 3.40, monthOfPurchase: 'May', cash: false},
    ],
}

const expensesReducer = (state = initialState, action: tsarType): InitialStateType => {
    switch (action.type) {
        case ADD_PRODUCT: {
            let newProduct = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                monthOfPurchase: action.payload.monthOfPurchase,
                cash: action.payload.cash
            }
            return {...state, products: [...state.products, newProduct]}
        }
        case REMOVE_PRODUCT: {
            return {...state, products: [...state.products].filter(el => el.id !== action.payload.id)}
        }
        default: return state
    }

}

type tsarType = AddProductACType | RemoveProductType

type AddProductACType = ReturnType<typeof addProductAC>
type RemoveProductType = ReturnType<typeof removeProductAC>

export const addProductAC = (id: string, name: string, price: number, monthOfPurchase: string, cash: boolean) => {
    return {
        type: ADD_PRODUCT,
        payload: {id, name, price, monthOfPurchase, cash}
    } as const
}

export const removeProductAC = (id: string) => {
    return {
        type: REMOVE_PRODUCT,
        payload: {id}
    } as const
}



export default expensesReducer