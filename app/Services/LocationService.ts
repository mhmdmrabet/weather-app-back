import Env from "@ioc:Adonis/Core/Env";
import { Location as LocationType } from "App/types/location.type";
import Location from "App/Models/Location";
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

  public async storeLocation(city: string) {
    try {
      const locationData: LocationType[] = await this.findLocation(city);
      if (locationData.length > 0) {
        const { name, lat, lon, country, state } = locationData[0];
        const searchPayload = { name };
        const savePayload = { name, lat, lon, state, country };
        const storedLocation = await Location.firstOrCreate(searchPayload, savePayload);
        return storedLocation;
      } else {
        throw new Error("Location not found");
      }
    } catch (error) {
      throw error;
    }
  }
}

export default new LocationService();
