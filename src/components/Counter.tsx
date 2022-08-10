import React, {FC, useEffect, useState} from 'react';
import Display from "./Display";
import Button from "./Button";
import {ErrorType} from "../App";


type PropsType = {
    minValue: number
    maxValue: number
    editMode: boolean
    error: ErrorType
}

const Counter: FC<PropsType> = ({
                                    minValue, maxValue,
                                    editMode, error
                                }) => {

    const [counter, setCounter] = useState<number>(minValue)

    useEffect(() => {
        setCounter(minValue)
    }, [minValue])

    const onClickInc = () => setCounter(counter + 1)

    const onClickReset = () => setCounter(minValue)

    return (
        <div className="box">
            <Display counter={counter} maxCounter={maxValue} editMode={editMode} error={error}/>
            <div className='boxButton'>
                <Button
                    name='inc'
                    callBack={onClickInc}
                    disabled={counter === maxValue || !editMode}
                    className='Button'
                />
                <Button
                    name='reset'
                    callBack={onClickReset}
                    disabled={counter === minValue || !editMode}
                    className='Button'
                />
            </div>
        </div>
    );
};

export default Counter;