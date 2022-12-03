import React from 'react';
import style from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {useFormik} from "formik";
import axios, {AxiosError} from "axios";
import {Alert, Snackbar} from '@mui/material';


const Fade = require('react-reveal/Fade')

type FormikErrorType = {
    email?: string
    message?: string
}


export const Contacts = () => {

    const token = '5983511629:AAF7ff5hw75E6a1sqa4cfvAPnKQv4QQTl9A'
    const chat_id = '-1001722194978'
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`


    const formik = useFormik({
        initialValues: {
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.message) {
                errors.message = 'Write something'
            }
            if (!values.email) {
                errors.email = 'Email required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: values => {
            console.log(values);
            formik.resetForm()
            alert('Thank you for writing, as soon as I read it, I will contact you')


            axios.post(urlApi, {
                chat_id: chat_id,
                parse_mode: 'html',
                text: formik.values
            }).then(() => {
                return alert('Expect')
            }).catch((e: AxiosError) => {
                console.log(e)
            })
        }
    })


    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'Contacts'}/>
                <Fade left>
                    <form className={style.form} onSubmit={formik.handleSubmit}>
                        <input
                            placeholder={'E-mail'}
                            type={'text'}
                            className={style.formArea}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email && formik.touched.email &&
                            <div style={{color: 'white', marginBottom: '20px'}}>{formik.errors.email}</div>}
                        <input
                            type={'text'}
                            placeholder={'Please enter text...'}
                            className={style.messageArea}
                            {...formik.getFieldProps('message')}/>
                        {formik.errors.message && formik.touched.message &&
                            <div style={{color: 'white', marginBottom: '20px'}}>{formik.errors.message}</div>}
                        <button type='submit'>Send message</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
};