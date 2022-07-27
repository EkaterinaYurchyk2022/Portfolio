import React from 'react';
import style from './Projects.module.scss'
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
        <div id='projects' className={style.projectsBlock}>
            <div className={style.container}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project style={social} title={'Social network'} description={'first description'}/>
                    <Project style={todoList} title={'Todolist'} description={'second description'}/>
                </div>
            </div>
        </div>
    );
};

