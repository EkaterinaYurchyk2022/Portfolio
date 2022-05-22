import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from './project/Project'

function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                <Project title={"Social network"} description={"first description"}/>
                <Project title={"Todolist"} description={"second description"}/>
                </div>

            </div>

        </div>
    );
};

export default Projects;