import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from "./Footer.module.css";

function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Ekaterina Yurchyk</h2>
                <div className={s.socialIcons}>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>

                </div>
                <span className={s.copyright}>2022 All rights reserved</span>
            </div>

        </div>
    );
};

export default Footer;