import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import RegisterValidator from "App/Validators/RegisterValidator";

export default class AuthController {
  public async register({ auth, request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(RegisterValidator);
      await User.create(payload);
      const token = await auth
        .use("api")
        .attempt(payload.email, payload.password, { expiresIn: "2days" });
      return response.created(token);
    } catch (error) {
      return response.badRequest();
    }
  }
}
