import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class UsersController {
  index() {
    //TODO: Implementar
  }

  async store({ request, response }: HttpContext) {
    const { name, email, password } = request.body()
    const hashedPass = await hash.make(password)

    const user = new User()
    user.name = name
    user.email = email
    user.password = hashedPass

    await user.save()

    return response.redirect().toRoute('auth.login')
  }
}
