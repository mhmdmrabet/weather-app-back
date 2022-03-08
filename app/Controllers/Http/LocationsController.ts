import { inject } from "@adonisjs/fold";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Location from "App/Models/Location";
import LocationService from "App/Services/LocationService";
import { Location as LocationType } from "App/types/location.type";

@inject()
export default class LocationsController {
  public locationService = LocationService;

  public async storeLocation({ params }: HttpContextContract) {
    try {
      const locationData: LocationType[] = await this.locationService.findLocation(params.city);
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
