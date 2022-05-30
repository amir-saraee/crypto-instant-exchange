import React from 'react'
import { Form } from 'reactstrap'
import { useForm, SubmitHandler } from 'react-hook-form'
import Styles from './AuthModal.module.scss'

type FormValues = {
  email: string
  password: string
}

const Login: React.FC<{ setActiveTab: (value: string) => void }> = ({
  setActiveTab
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const loginSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data, errors)
  }

  return (
    <Form className={Styles.auth_form} onSubmit={handleSubmit(loginSubmit)}>
      <h4>ورود به سایت</h4>
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
      </div>

      <div className={Styles.forget} onClick={() => setActiveTab('3')}>
        <span>فراموشی کلمه عبور</span>
      </div>

      <button type='submit' className={Styles.button}>
        ورود
      </button>
    </Form>
  )
}

export default Login
