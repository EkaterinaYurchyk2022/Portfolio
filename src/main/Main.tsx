import React from 'react';
import style from './Main.module.scss';
import Particles from "react-tsparticles";
import ReactTypingEffect from 'react-typing-effect';
// @ts-ignore
import Tilt from 'react-tilt'


const Fade = require('react-reveal/Fade')

const particlesOptions = {
    particles: {
        color: {
            value: 'blue',
        },
        links: {
            color: '#b2c4de',
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            enable: true,
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.7,
        },
        shape: {
            type: 'circle',
        },
    },
}
export const Main = () => {
    return (
        <div id='main' className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions}/>
            <Fade top>
                <div className={style.container}>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <span>I am Ekaterina <span>Yurchyk</span></span>
                       <span><ReactTypingEffect text={'Front-end Developer'}/></span>
                    </div>
                    <Tilt className="Tilt"
                          options={{max: 35}}>
                        <div className={style.photo}>
                            <div className={style.image}>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
}

