import React from 'react';
import s from './Nav.module.scss';
import my from '../common/components/button/Button.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="" className={my.button}>Main</a>
            <a href="" className={my.button}>Skills</a>
            <a href="" className={my.button}>Projects</a>
            <a href="" className={my.button}>Contacts</a>

        </div>
    );
}

