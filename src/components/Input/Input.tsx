import React, {ChangeEvent} from 'react';
import s from './Input.module.css'
import {ErrorType, ValueType} from "../../App";

type PropsType = {
    type: ValueType
    name: string
    value: number
    changeValue: (value: number, type: ValueType) => void
    error: ErrorType
}

const Input = (props: PropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(+e.currentTarget.value, props.type)
    }

    const inputClass = `${s.input} ${props.error === 'all' || props.error && props.error === props.type ? s.error : ''}`

    return (
        <label className={s.label}>
            <span>{props.name}:</span>
            <input
                className={inputClass}
                type="number"
                value={props.value}
                onChange={onChangeHandler}
            />
        </label>
    );
};

export default Input;