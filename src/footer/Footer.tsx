import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from "./Footer.module.scss";
import GitHub from '../assets/image/GitHub.png'
import telegram from '../assets/image/telegram.png'
import gmail from '../assets/image/gmail.png'


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 >Ekaterina Yurchyk</h2>
                <div className={s.footerContacts}>
                    <a href={'https://github.com/EkaterinaYurchyk2022'} target={'_blank'}>
                        <img src={GitHub} className={s.footerItem}/>
                    </a>
                    <a href={'https://t.me/EkaterinaYurchyk'} target={'_blank'}>
                        <img src={telegram} className={s.footerItem}/>
                    </a>
                    <a href={'mailto:ekaterina.yurchyk.s@gmail.com'}>
                        <img src={gmail} className={s.footerItem}/>
                    </a>
              {/*      <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
*/}
                </div>
                <div className={s.footerEnd}>© 2022 All Rights Reserved</div>
            </div>

        </div>
    );
};
