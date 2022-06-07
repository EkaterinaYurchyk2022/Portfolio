import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import s from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={s.form}>
                    <input placeholder={'Name'} type={'text'} className={s.input}/>
                    <input placeholder={'E-mail'} type={'text'} className={s.input}/>
                    <textarea placeholder={'Your message'} className={s.textarea}/>
                </form>
                <Button type={'submit'} buttonTitle={'Send message'}/>
            </div>
        </div>
    );
};