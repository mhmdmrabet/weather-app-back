import { inject } from "@adonisjs/fold";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import LocationService from "App/Services/LocationService";
import WeatherService from "App/Services/WeatherService";

@inject()
export default class WeathersController {
  public locationService = LocationService;
  public weatherService = WeatherService;

  public async getWeather({ params }: HttpContextContract) {
    try {
      const location = await this.locationService.storeLocation(params.city);
      const weather = this.weatherService.getWeather(location.name);
      return weather;
    } catch (error) {
      throw error;
    }
  }
}
