import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async show({ response, auth }: HttpContextContract) {
    try {
      const { id } = await auth.user!;
      const user = await User.findOrFail(id);
      return user;
    } catch (error) {
      return response.badRequest({ error });
    }
  }
}
