import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Setter from "./components/Setter";


export type ErrorType = null | 'min' | 'max' | 'all'
export type ValueType = 'min' | 'max'

type NumberType = {
    type: ValueType
    name: string
    value: number
}

export type StateType = {
    min: NumberType
    max: NumberType
}

function App() {

    const [state, setState] = useState<StateType>({
        min: {
            type: 'min',
            name: 'min value',
            value: 1,
        },
        max: {
            type: 'max',
            name: 'max value',
            value: 5,
        },
    })

    const [error, setError] = useState<ErrorType>(null)

    const [editMode, setEditMode] = useState(true)

    const changeValue = (value: number, type: ValueType) => {
        if (type === 'max' && value <= state.min.value ||
            type === 'min' && value >= state.max.value) {
            setError('all')
        } else {
            if (+value >= 0) {
                setError(null)
            } else {
                setError(type)
            }
        }
        setState({...state, [type]: {...state[type], value}})
    }

    useEffect(() => {
        let minValue = localStorage.getItem('minValue')
        if (minValue) {
            state.min.value = JSON.parse(minValue)
            setState({...state})
        }
        let maxValue = localStorage.getItem('maxValue')
        if (maxValue) {
            const max = JSON.parse(maxValue)
            setState({...state, max: {...state.max, value: max}})
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(state.min.value))
        localStorage.setItem('maxValue', JSON.stringify(state.max.value))
    }, [state.min.value, state.max.value])

    return (
        <div className="App">
            <Setter
                state={state}
                error={error}
                editMode={editMode}
                changeValue={changeValue}
                setEditMode={setEditMode}
            />
            <Counter
                minValue={state.min.value}
                maxValue={state.max.value}
                editMode={editMode}
                error={error}
            />
        </div>
    )
}

export default App;
