'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { signInUser } from '@/shared/actions/sign-in'
import { appConfig } from '@/shared/model/config'
import { LoginFormData } from '@/shared/model/types'
import { loginSchema } from '@/shared/model/validation'

import Input from '../input/input'
import { Button } from '../kit/button'
import { Label } from '../kit/label'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    await signInUser(data.email, data.password)
    reset()
    window.location.reload()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {appConfig.loginFields.map(field => (
        <div key={field.label}>
          <Label>{field.label}</Label>
          <Input
            type={field.type || 'text'}
            fieldName={field.name as keyof LoginFormData}
            placeholder={field.placeholder || ''}
            register={register}
            hasError={
              !!errors[field.name as keyof LoginFormData]
            }
            errorMessage={
              errors[field.name as keyof LoginFormData]?.message
            }
          />
        </div>
      ))}
      <div className='flex justify-center'>
        <Button className='w-full bg-blue-700 hover:bg-blue-800'>
          Войти
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
