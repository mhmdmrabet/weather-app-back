import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
  public async show({ response, auth }: HttpContextContract) {
    try {
      const user = await auth.user!;
      return user;
    } catch (error) {
      return response.badRequest({ error });
    }
  }
}
