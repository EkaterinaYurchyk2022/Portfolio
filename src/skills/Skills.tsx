import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import {skillsData} from '../common/data/skills-data';

const Fade = require('react-reveal/Fade')

export const Skills = () => {
    return (
        <div id={'skills'} className={styles.skillsBlock}>
            <div className={styles.container}>
                <Fade top>
                    <Title text={'Skills'}/>
                </Fade>
                <div className={styles.skills}>
                    {skillsData.map(s =>
                        <Skill key={s.id}
                               id={s.id}
                               title={s.title}
                               description={s.description}
                               backgroundImage={s.backgroundImage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};