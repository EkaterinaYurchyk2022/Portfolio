import s from './Button.module.scss';
import React from 'react';
import style from './Button.module.scss'

type ButtonPropsType = {
    type?: 'button' | 'submit' | 'reset' | undefined
    text: string
}

function Button(props: ButtonPropsType) {
    return (
        <a href="" className={style.btn}>{props.text}</a>
    )
}

export default Button