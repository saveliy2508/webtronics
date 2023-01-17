import React, {useState} from 'react';
import {Input} from "shared/components/Input";
import {Button} from "shared/components/Button";
import s from './Contact.module.scss';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {formRequest, FormRequestParams} from "shared/api/formRequest";
import * as yup from 'yup';

export const Contact = () => {
    const [send, setSend] = useState(false);
    const validationsSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        phone: yup.string().required('Phone is required'),
        email: yup.string().email('Invalid email format').required('Email is required')
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationsSchema)
    });

    const handleRequest = handleSubmit((data) => formRequest(data as FormRequestParams)
        .then(res => {
            setSend(true)
            alert('Success! We will contact you shortly!')
        })
        .catch((err) => alert('Failed to send request, please try again later...'))
    )

    return (
        <section className={s.ContactGradientWrapper} id={'contact-block'}>
            <div className={s.Contact}>
                {!send ? (
                        <>
                            <div className={s.title}>
                                Contact us
                            </div>
                            <div className={s.text}>
                                Do you have any kind of help please contact with us.
                            </div>
                        </>
                    )
                    : (
                        <div className={s.title}>
                            Success!
                        </div>
                    )
                }
                <div className={s.formWrapper}>
                    <form
                        className={s.form}
                        action=""
                        onSubmit={handleRequest}
                    >
                        <div
                            className={s.inputWrapper}
                        >
                            <Input
                                type="text"
                                placeholder={'Name'}
                                register={{...register('name')}}
                                error={errors.name?.message as string}
                                disabled={send}
                            />
                        </div>
                        <div className={s.inputWrapper}>
                            <Input
                                type="text"
                                placeholder={'Phone'}
                                register={register('phone')}
                                error={errors.phone?.message as string}
                                disabled={send}
                            />
                        </div>
                        <div className={s.inputWrapper}>
                            <Input
                                type="text"
                                placeholder={'E-mail'}
                                register={{...register('email')}}
                                error={errors.email?.message as string}
                                disabled={send}
                            />
                        </div>
                        <Button
                            className={s.button}
                            type={'submit'}
                            disabled={send}
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
