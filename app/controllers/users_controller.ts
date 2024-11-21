import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  index() {
    //TODO: Implementar
  }

  async store({ request, response }: HttpContext) {
    const { name, email, password } = request.body()

    const user = new User()
    user.name = name
    user.email = email
    user.password = password

    await user.save()

    return response.redirect().toRoute('auth.login')
  }
}
