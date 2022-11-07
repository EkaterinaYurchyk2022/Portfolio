import React from 'react';
import style from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {useForm} from 'react-hook-form';
import {Button} from '../common/components/button/Button';
import axios from 'axios';


const Fade = require('react-reveal/Fade')

interface IFormInputs {
    name: string
    email: string
    message: string
}

export const Contacts = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<IFormInputs>();

    const onSubmit = (data: IFormInputs, e: any) => {
        e.preventDefault()
        axios.post('https://gmail-smtp-nodejs-my-server.herokuapp.com/', {data})
            .then((res) => {
                alert('Thank you for your message');
            });
        e.target.reset()
    }

    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={style.container}>
                <Fade top>
                <Title text={'Contacts'}/>
                </Fade>
                    <Fade>
                    <form className={style.form} onSubmit={handleSubmit(onSubmit)} id={'contact-form'}>
                        <input placeholder={'Your name'} type={'text'} className={style.formArea} {...register('name', {required: true})}/>
                        {errors.name && <p style={{color: '#fff'}}>Name is required</p>}
                        <input {...register('email', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        })} placeholder={'E-mail'} type={'text'} className={style.formArea}/>
                        {errors.email && <p style={{color: '#fff'}}>E-mail is required</p>}
                        <textarea {...register('message', {required: true})} placeholder={'Your message'} className={style.messageArea}/>
                        <Button type='submit' buttonTitle={'Send message'}/>
                    </form>
                </Fade>

            </div>
        </div>
    );
};