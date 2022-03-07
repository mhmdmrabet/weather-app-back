import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import RegisterValidator from "App/Validators/RegisterValidator";

export default class AuthController {
  public async register({ auth, request, response }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator);
    await User.create(payload);
    const token = await auth
      .use("api")
      .attempt(payload.email, payload.password, { expiresIn: "6h" });
    return response.created(token);
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.only(["email", "password"]);
    try {
      const token = await auth.use("api").attempt(email, password, { expiresIn: "6h" });
      return token;
    } catch (error) {
      return response.badRequest("Invalid credentials");
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use("api").revoke();
    return response.noContent();
  }
}
