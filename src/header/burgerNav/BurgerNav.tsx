import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from 'react-scroll';


export const BurgerNav = () => {
    let [openedMenu, setOpenedMenu] = useState(false)

    let onBurgerBtnClick = () => {
        setOpenedMenu(!openedMenu)
        console.log(openedMenu)
    }
    return (
        <div className={style.burgerNav}>
            <div className={openedMenu ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                < Link
                    activeClass={style.active}
                    to='main'
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}>Main</Link>
                <Link
                    activeClass={style.active}
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}>Skills</Link>
                <Link
                    activeClass={style.active}
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}>Projects</Link>
                <Link
                    activeClass={style.active}
                    to='contacts'
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}>Contacts</Link>
            </div>
            <div className={style.burgerBtn} onClick={onBurgerBtnClick}>

            </div>
        </div>
    );
}

