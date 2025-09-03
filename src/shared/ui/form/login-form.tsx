'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { config } from '@/shared/model/config'
import { loginSchema } from '@/shared/model/validation'

import Input from '../input/input'
import { Button } from '../kit/button'
import { Label } from '../kit/label'

type LoginFormData = z.infer<typeof loginSchema>

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (data: LoginFormData) => {
    ;(console.log(data), reset())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {config.loginFields.map(field => (
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
