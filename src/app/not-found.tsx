import Link from 'next/link'

export const metadata = {
  title: '404'
}

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[80vh]'>
      <div className='text-8xl font-bold text-gray-300'>404</div>
      <h1 className='text-3xl font-bold tracking-tight'>
        Страница не найдена
      </h1>
      <div className='pt-6'>
        <Link href='/' className='text-red-400'>
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
