import React from 'react';
import style from './Skill.module.scss'


type SkillPropsType = {
    id?: string
    title: string
    description?: string
    icon?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={props.icon} alt=''/>
            </div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <span className={style.description}>
              {props.description}
            </span>
        </div>
    );
};
