'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { config } from '@/shared/model/config'
import { RegisterFormData } from '@/shared/model/types'
import { registerSchema } from '@/shared/model/validation'

import Input from '../input/input'
import { Button } from '../kit/button'
import { Label } from '../kit/label'

const RegisterForm = () => {
  const { register, handleSubmit, reset, setValue, getValues } =
    useForm<RegisterFormData>({
      resolver: zodResolver(registerSchema)
    })

  const onSubmit = (data: RegisterFormData) => console.log(data)

  const handlePhoneFocus = () => {
    const currentValue = getValues('phone')
    if (!currentValue || currentValue === '') {
      setValue('phone', '+7')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {config.registerFields.map(field => (
        <div key={field.label}>
          <Label>{field.label}</Label>
          <Input
            type={field.type || 'text'}
            fieldName={field.name as keyof RegisterFormData}
            placeholder={field.placeholder || ''}
            register={register}
            onFocus={
              field.name === 'phone'
                ? handlePhoneFocus
                : undefined
            }
          />
        </div>
      ))}
      <div className='flex justify-center'>
        <Button className='w-full bg-blue-700 hover:bg-blue-800'>
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
