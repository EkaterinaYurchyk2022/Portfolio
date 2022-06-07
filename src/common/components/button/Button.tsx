import s from './Button.module.scss';
import React from 'react';

type ButtonPropsType = {
    type?: 'button' | 'submit' | 'reset' | undefined
    buttonTitle: string
}

export const Button: React.FC<ButtonPropsType> = ({type, buttonTitle}) => {
    return <button type={type} className={s.button}>{buttonTitle}</button>
}