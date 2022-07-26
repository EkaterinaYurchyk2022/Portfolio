import React from 'react';
import style from './Main.module.scss';
import Particles from "react-tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


const Fade = require('react-reveal/Fade')

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}
export const Main = () => {
    return (
        <div id={'main'} className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions}/>
            <Fade top>
                <div className={style.container}>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <span>I am Ekaterina <span>Yurchyk</span></span>
                        <ReactTypingEffect text={'Front-end Developer'}/>
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

