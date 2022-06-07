import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import s from './Hire.module.scss'
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

export const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={`${styleContainer.container} ${s.hireContainer}`}>
                <Title text={'I am available for Freelance'}/>
                <Button buttonTitle={'Hire me'}/>
            </div>

        </div>
    );
};

