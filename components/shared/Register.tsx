import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Form } from 'reactstrap'
import Styles from './AuthModal.module.scss'

type FormValues = {
  email: string
  password: string
  password2: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const formSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data, errors)
  }

  return (
    <Form className={Styles.auth_form} onSubmit={handleSubmit(formSubmit)}>
      <h4>ثبت نام در سایت</h4>
      <div className={Styles.inputs}>
        <div>
          <input
            type='email'
            placeholder='ایمیل'
            {...register('email', { required: true })}
            className={errors.email && Styles.error}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='کلمه عبور'
            {...register('password', { required: true })}
            className={errors.password && Styles.error}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='تایید کلمه عبور'
            {...register('password2')}
          />
        </div>
      </div>

      <button type='submit' className={Styles.button}>
        ثبت نام
      </button>
    </Form>
  )
}

export default Register
