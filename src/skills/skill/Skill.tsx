import React from 'react';
import style from './Skill.module.scss'

const Zoom = require('react-reveal/Zoom')
type SkillPropsType = {
    id: string
    title: string
    description?: string
    backgroundImage: string
}

export const Skill: React.FC<SkillPropsType> = ({title, description, backgroundImage}) => {
    return (
        <div className={style.skill}>
            <Zoom>
                <div className={style.icon} style={{backgroundImage}}></div>
                <h3 className={style.skillTitle}>{title}</h3>
                <span className={style.description}>
              {description}
            </span>
            </Zoom>
        </div>
    );
};
