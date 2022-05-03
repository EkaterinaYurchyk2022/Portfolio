import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
        return (
            <div className={s.skillsBlock}>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <h2 className={s.title}> Skills </h2>
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

export default Skills;