export const config = {
  title: {
    default: 'Urban Coffee',
    template: '%s | Urban Coffee'
  },

  description:
    'Experience the perfect blend of artisanal coffee and cozy ambiance at Brew Haven.',

  navItems: [
    { href: '/menu', label: 'Меню' },
    { href: '/cart', label: 'Корзина' },
    { href: '/profile', label: 'Профиль' }
  ],

  registerFields: [
    {
      name: 'email',
      label: 'Почта',
      placeholder: 'examle@mail.ru'
    },
    {
      name: 'phone',
      label: 'Телефон',
      placeholder: '+79997772233'
    },
    {
      name: 'password',
      label: 'Пароль',
      type: 'password',
      placeholder: '******'
    },
    {
      name: 'confirmPassword',
      label: 'Подтвердить пароль',
      type: 'password'
    }
  ]
}
