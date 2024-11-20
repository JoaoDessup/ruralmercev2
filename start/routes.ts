/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/auth/login', async ({ view }) => {
    return view.render('pages/authPage', { component: 'login' })
  }).as('auth.login')
  
  router.get('/auth/create', async ({ view }) => {
    return view.render('pages/authPage', { component: 'create' })
  }).as('auth.create')
