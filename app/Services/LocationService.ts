import Env from "@ioc:Adonis/Core/Env";
import axios from "axios";

class LocationService {
  public async findLocation(city: string) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${Env.get(
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

export default new LocationService();
