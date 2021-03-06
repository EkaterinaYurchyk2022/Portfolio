import React from 'react';
import style from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';


const Fade = require('react-reveal/Fade')

export const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'Contacts'}/>
                <Fade left>
                    <form className={style.form}>
                        <input placeholder={'Name'} type={'text'} className={style.formArea}/>
                        <input placeholder={'E-mail'} type={'text'} className={style.formArea}/>
                        <textarea placeholder={'Your message'} className={style.messageArea}/>
                        <button type='submit'>Send message</button>
                    </form>
                </Fade>

            </div>
        </div>
    );
};