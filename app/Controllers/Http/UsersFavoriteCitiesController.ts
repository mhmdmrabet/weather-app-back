import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Location from "App/Models/Location";

export default class UsersFavoriteCitiesController {
  public async index({ auth, response }: HttpContextContract) {
    try {
      const user = await auth.user!;
      const usersfavoriteCities = await user.related("locations").query();
      return usersfavoriteCities;
    } catch (error) {
      return response.badRequest({ error });
    }
  }

  public async attach({ auth, response, request }: HttpContextContract) {
    try {
      const user = await auth.user!;
      const { cityName } = await request.params();

      const city = await Location.findByOrFail("name", cityName);

      await user.related("locations").attach([city.id]);

      return response.created();
    } catch (error) {
      return response.badRequest({ error });
    }
  }

  public async dettach({ auth, response, request }: HttpContextContract) {
    try {
      const user = await auth.user!;
      const { cityId } = await request.params();

      const city = await Location.findOrFail(cityId);

      await user.related("locations").detach([city.id]);

      return response.noContent();
    } catch (error) {
      return response.badRequest({ error });
    }
  }
}
