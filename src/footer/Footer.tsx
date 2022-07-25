import React from 'react';
import style from "./Footer.module.scss";
import GitHub from '../assets/image/GitHub.png'
import telegram from '../assets/image/telegram.png'
import gmail from '../assets/image/gmail.png'
import {Title} from "../common/components/title/Title";


export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title text={'Ekaterina Yurchyk'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href={'https://github.com/EkaterinaYurchyk2022'} target={'_blank'}>
                            <img src={GitHub} alt=''/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href={'https://t.me/EkaterinaYurchyk'}>
                            <img src={telegram} alt=''/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href={'mailto:ekaterina.yurchyk.s@gmail.com'}>
                            <img src={gmail} alt=''/>
                        </a>
                    </div>
                </div>
                <span className={style.copyright}>© 2022 All Rights Reserved</span>
            </div>
        </div>
    )
}
