import React from 'react';
import style from './Projects.module.scss'
import {Project} from './project/Project'
import {Title} from '../common/components/title/Title';
import {projectsData} from '../common/data/projects-data';

const Fade = require('react-reveal/Fade')

export const Projects = () => {

    return (
        <div id={'projects'} className={style.projectsBlock}>
            <div className={style.container}>
                <Fade top>
                    <Title text={'Projects'}/>
                </Fade>
                <div className={style.projects}>
                    {projectsData.map(p =>
                        <Project key={p.id}
                                 id={p.id}
                                 title={p.title}
                                 description={p.description}
                                 backgroundImage={p.backgroundImage}
                                 repoLink={p.repoLink}
                        />)}
                </div>
            </div>
        </div>
    );
};
