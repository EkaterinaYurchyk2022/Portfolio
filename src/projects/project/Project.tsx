import React from 'react';
import style from './Project.module.scss'
import my from "../../common/components/button/Button.module.scss";


const Zoom = require('react-reveal/Zoom')

type ProjectPropsType = {
    id:string
    title: string
    description: string
    backgroundImage: string
    repoLink: string
    //demoLink: string
}

export const Project: React.FC<ProjectPropsType> = ({title, description, backgroundImage, repoLink}) => {

    return (
      <div className={style.project}>
        <Zoom>
            <div className={style.image} style={{backgroundImage}}>
               {/* <a href={demoLink} className={my.btn} target={'_blank'} rel="noopener noreferrer">View
                    project</a>*/}
                <a href={repoLink} className={my.btn} target={'_blank'} rel="noopener noreferrer">View code</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{title}</h3>
                <span className={style.description}>
                    {description}
                </span>
            </div>
        </Zoom>
    </div>
    );
};

