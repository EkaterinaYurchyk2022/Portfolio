import React from 'react';
import s from './Skills.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/title/Title';


export const Skills = () => {
        return (
            <div className={s.skillsBlock}>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <Title text={"Skills"}/>
                    <div className={s.skills}>
                        <Skill title={'JS'} description={'First Description'}/>
                        <Skill title={'CSS'} description={'Second Description'}/>
                        <Skill title={'React'} description={'Third Description'}/>
                    </div>
                </div>
            </div>
        );
    }
;

