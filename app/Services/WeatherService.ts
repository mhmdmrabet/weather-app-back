import Env from "@ioc:Adonis/Core/Env";
import axios from "axios";

class WeatherService {
  public async getWeatherByName(name: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&lang=fr=metric&appid=${Env.get(
      "OPEN_WEATHER_API_KEY"
    )}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new WeatherService();
