import React from 'react';
import {ErrorType} from "../App";


type DisplayPropsType = {
    counter: number
    maxCounter: number
    editMode: boolean
    error: ErrorType
}

const Display = (props: DisplayPropsType) => {
    return (
        <div className='Display'>
            {props.error ?
                <span className={'text red'}>Incorrect value!</span>
                : props.editMode ?
                    <span className={props.counter === props.maxCounter ? 'red count' : 'count'}>{props.counter}</span>
                    : <span className={'text'}>Enter values and press 'set'</span>}
        </div>
    );
};

export default Display;