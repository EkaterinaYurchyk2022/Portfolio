import style from './Button.module.scss';
import React from 'react';

type ButtonPropsType = {
    type?: 'button' | 'submit' | 'reset' | undefined
    buttonTitle: string
}

export const Button: React.FC<ButtonPropsType> = ({type, buttonTitle}) => {
    return <button type={type} className={style.btn}>{buttonTitle}</button>
}

export default Button