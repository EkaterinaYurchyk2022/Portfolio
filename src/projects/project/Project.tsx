import React from 'react';
import styles from './Project.module.scss'


type ProjectPropsType = {
    title: string
    description: string
    style: any
}

export const Project = (props: ProjectPropsType) => {

    return (
        <div className={styles.project}>
            <div className={styles.image} style={props.style}>
                <a className={styles.viewBtn}>View</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    );
};

