import React from 'react';
import Input from "./Input/Input";
import Button from "./Button";
import {ErrorType, StateType, ValueType} from "../App";

type PropsType = {
    state: StateType
    error: ErrorType
    editMode: boolean
    changeValue: (value: number, type: ValueType) => void
    setEditMode: (mode: boolean) => void
}

const Setter = (props: PropsType) => {

    const clickButton = () => props.setEditMode(true)

    const changeValue = (value: number, type: ValueType) => {
        props.changeValue(value, type)
        props.setEditMode(false)
    }

    return (
        <div className="box">
            <div className='Display'>
                <Input {...props.state.max}
                       changeValue={changeValue} error={props.error}/>
                <Input {...props.state.min}
                       changeValue={changeValue} error={props.error}/>
            </div>
            <div className='boxButton'>
                <Button
                    name='set'
                    callBack={clickButton}
                    disabled={!!props.error || props.editMode}
                    className='Button'
                />
            </div>
        </div>
    );
};

export default Setter;