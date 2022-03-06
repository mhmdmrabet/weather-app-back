import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async register({}: HttpContextContract) {
    return { route: "register" };
  }
}
