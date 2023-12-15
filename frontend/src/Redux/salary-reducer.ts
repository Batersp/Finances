import {v1} from "uuid";

const ADD_ZP = 'ADD_ZP'

type ZpType = {
    id: string
    year: number
    mounth: string
    summa: number
}

export type InitialStateType = {
    zp: Array<ZpType>
}

const initialState: InitialStateType = {
    zp: [
        {id: v1(), year: 2022, mounth: 'May', summa: 1}
    ]
}


const salaryReducer = (state = initialState, action: tsarType): InitialStateType => {
    return state
}
type tsarType = AddZpACType

type AddZpACType = ReturnType<typeof addZpAC>

export const addZpAC = (year: number, mounth: string, summa: number) => {
    return {
        type: ADD_ZP,
        payload: {year, mounth, summa}
    } as const
}

export default salaryReducer