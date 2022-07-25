import React from 'react';
import style from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/title/Title';


export const Skills = () => {
   /* let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;*/


        return (
            <div className={style.skillsBlock}>
                <div className={style.container} >
                    <Title text={'Skills'}/>
                    <div className={style.skills}>
                        <Skill title={'JS'}
                               //icon={js}
                        description={'First Description'}/>
                        <Skill title={'CSS'}
                            //icon={html & css}
                               description={'Second Description'}/>
                        <Skill title={'React'}
                            //icon={react}
                               description={'Third Description'}/>
                    </div>
                </div>
            </div>
        );
    }
;

