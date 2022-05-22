import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import s from './Contacts.module.css'


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${styleContainer.container}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea />
                    <button type="submit" className={s.submitButton}>Send</button>
                </form>
            </div>

        </div>
    );
};

export default Contacts;