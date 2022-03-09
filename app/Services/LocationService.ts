import Env from "@ioc:Adonis/Core/Env";
import { Location as LocationType } from "App/types/location.type";
import Location from "App/Models/Location";
import axios from "axios";

type Args = {
  city?: string;
  lon?: string;
  lat?: string;
};

class LocationService {
  private async findLocation({ city, lon, lat }) {
    let url;

    if (city) {
      url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${Env.get(
        "OPEN_WEATHER_API_KEY"
      )}`;
    } else {
      url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${Env.get(
        "OPEN_WEATHER_API_KEY"
      )}`;
    }

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async storeLocation({ city, lon, lat }: Args) {
    try {
      const locationData: LocationType[] = await this.findLocation({ city, lon, lat });
      if (locationData.length > 0) {
        const firstLocation = locationData[0];
        const location = {
          name: firstLocation.name,
          lat: firstLocation.lat,
          lon: firstLocation.lon,
          country: firstLocation.country,
          state: firstLocation.state,
        };
        const storedLocation = await Location.firstOrCreate({ name: location.name }, location);
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
