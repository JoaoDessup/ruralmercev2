/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const UsersController = () => import('#controllers/users_controller')

router.on('/').render('pages/home')

router.get('/auth/login', async ({ view }) => {
  return view.render('pages/authPage', { component: 'login' })
}).as('auth.login')

router.get('/auth/create', async ({ view, request }) => {
  const csrfToken = request.csrfToken

  return view.render('pages/authPage', {
    component: 'create',
    csrfToken: csrfToken,
  })
}).as('auth.create')

router.post('/auth/create', [UsersController, 'store']).as('users.store')
