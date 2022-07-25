import React from 'react';
import style from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <input placeholder={'Name'} type={'text'} className={style.formArea}/>
                    <input placeholder={'E-mail'} type={'text'} className={style.formArea}/>
                    <textarea placeholder={'Your message'} className={style.messageArea}/>
                    <button type='submit'>Send message</button>
                </form>
            </div>
        </div>
    );
};