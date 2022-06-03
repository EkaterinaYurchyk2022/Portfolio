import React from 'react';
import s from './Project.module.css'

type ProjectPropsType={
    title:string
    description:string
}

const Project = (props:ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <a className={s.viewBtn}>View</a>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Project;