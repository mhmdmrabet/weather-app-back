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
      const { id, name } = await this.locationService.storeLocation({
        city: params.city,
      });
      const weather = await this.weatherService.getWeatherByName(name);

      return {
        location: { id, name },
        weather: {
          icon: weather.weather[0].icon,
          temperature: weather.main.temp,
          description: weather.weather[0].description,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  public async getWeatherByCoords({ request }: HttpContextContract) {
    const { lon, lat } = request.qs();
    try {
      const { id, name } = await this.locationService.storeLocation({
        lon,
        lat,
      });
      const weather = await this.weatherService.getWeatherByName(name);

      return {
        location: { id, name },
        weather: {
          icon: weather.weather[0].icon,
          temperature: weather.main.temp,
          description: weather.weather[0].description,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
