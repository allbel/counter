import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
    className?: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <button
            onClick={props.callBack}
            disabled={props.disabled ?? false}
            className={props.className ? props.className : ''}
        >{props.name}</button>
    );
};

export default Button;