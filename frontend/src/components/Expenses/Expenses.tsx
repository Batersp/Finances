import React, {ChangeEvent, useState} from "react";
import style from 'src/components/Expenses/Expenses.module.css'
import {MapDispatchToPropsType, MapStateToPropsType} from "src/components/Expenses/ExpensesContainer";
import {v1} from "uuid";


export const Expenses = (props: MapStateToPropsType & MapDispatchToPropsType) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [checked, setChecked] = useState(false)
    const [selectValue, setSelectValue] = useState('January')
    const [mounth, setMounth] = useState('January')

    const onNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onPriceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(+e.currentTarget.value)
    }

    const onMounthChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setMounth(e.currentTarget.value)
    }

    const onCheckChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked)
    }

    const AddButtonHandler = () => {
        const id = v1()
        props.addProduct(id, name, price, mounth, checked)
        setName('')
        setPrice(0)
        setMounth('')
        setChecked(false)
    }

    const onDeleteClickHandler = (id: string) => {
        props.removeProduct(id)
    }

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }

    return (
        <div className={style.main}>
            <div className={style.add}>Добавить продукт
                <div className={style.newProduct}>
                    <div className={style.item}>
                        <span className={style.text}>Название продукта</span>
                        <div className={style.input}>
                            <input
                                value={name}
                                onChange={onNameChangeHandler}
                            />
                        </div>
                    </div>
                    <div className={style.item}>
                        <span className={style.text}>Цена</span>
                        <div className={style.input}>
                            <input
                                type="number"
                                value={price}
                                onChange={onPriceChangeHandler}
                            />
                        </div>
                    </div>
                    <div className={style.item}>
                        <span className={style.text}>Месяц покупки</span>

                        <div className={style.input}>
                            <select value={mounth} onChange={onMounthChangeHandler}>
                                <option value="January">Январь</option>
                                <option value="February">Февраль</option>
                                <option value="Mart">Март</option>
                                <option value="April">Апрель</option>
                                <option value="May">Май</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.item}>
                        <span className={style.text}>наличные</span>
                        <div className={style.input}>
                            <input
                                type='checkbox'
                                checked={checked}
                                onChange={onCheckChangeHandler}
                            />
                        </div>
                    </div>

                </div>
                <button onClick={AddButtonHandler}>ADD</button>
            </div>
            <div className={style.old}>Купленные товары
                <div> Выбери месяц
                    <select value={selectValue} onChange={onSelectChange}>
                        <option value="January">Январь</option>
                        <option value="February">Февраль</option>
                        <option value="Mart">Март</option>
                        <option value="April">Апрель</option>
                        <option value="May">Май</option>
                    </select>
                </div>

                <div>{
                    props.expensesPage.filter(el => el.monthOfPurchase === selectValue).map(el => <div key={el.id}>
                        <span> {el.name} </span>
                        <span> {el.price} </span>
                        <span> {el.monthOfPurchase} </span>
                        {el.cash
                            ? <span> Наличные </span>
                            : <span> Безнал </span>}
                        <button onClick={() => onDeleteClickHandler(el.id)}>delete</button>
                    </div>)}
                </div>
            </div>
        </div>
    )
}



