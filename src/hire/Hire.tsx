import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import s from './Hire.module.css'

function Hire() {
    return (
        <div className={s.hireBlock}>
            <div className={`${styleContainer.container} ${s.hireContainer}`}>
                <h2 className={s.title}> I am available for Freelance</h2>
                <a href="" className={s.hireBtn}>Hire me</a>
            </div>

        </div>
    );
};

export default Hire;