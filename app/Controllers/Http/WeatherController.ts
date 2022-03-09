import { inject } from "@adonisjs/fold";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import LocationService from "App/Services/LocationService";
import WeatherService from "App/Services/WeatherService";

@inject()
export default class WeathersController {
  public locationService = LocationService;
  public weatherService = WeatherService;

  public async getWeatherByName({ params }: HttpContextContract) {
    try {
      const location = await this.locationService.storeLocation({
        city: params.city,
      });
      const weather = this.weatherService.getWeatherByName(location.name);
      return weather;
    } catch (error) {
      throw error;
    }
  }

  public async getWeatherByCoords({ request }: HttpContextContract) {
    const { lon, lat } = request.qs();
    try {
      const location = await this.locationService.storeLocation({
        lon,
        lat,
      });
      const weather = this.weatherService.getWeatherByName(location.name);
      return weather;
    } catch (error) {
      throw error;
    }
  }
}
