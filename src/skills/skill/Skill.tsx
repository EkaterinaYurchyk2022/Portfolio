import React from 'react';
import s from './Skill.module.scss'


type SkillPropsType = {
    id?: string
    title: string
    description?: string
    backgroundImage?: string
}

export const Skill: React.FC<SkillPropsType> = ({title, description, backgroundImage}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={{backgroundImage}}></div>
            <h3 className={s.skillTitle}>{title}</h3>
            <span className={s.description}>
              {description}
            </span>

        </div>
    );
};
