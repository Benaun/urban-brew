import LoginForm from '@/shared/ui/form/login-form'
import RegisterForm from '@/shared/ui/form/register-form'
import { Button } from '@/shared/ui/kit/button'

export default function Home() {
  return (
    <div>
      <Button
        variant={'outline'}
        className='bg-blue-400 cursor-pointer'
      >
        Click me
      </Button>

      <RegisterForm />
      <LoginForm />
    </div>
  )
}
