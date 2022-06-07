import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project'
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/image/TodoList.png'
import socialNetworkImage from '../assets/image/social-network-background-with-icons_23-2147497535.jpg'

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todoList = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={s.projects}>
                    <Project style={social} title={"Social network"} description={"first description"}/>
                    <Project style={todoList} title={"Todolist"} description={"second description"}/>
                </div>

            </div>

        </div>
    );
};

