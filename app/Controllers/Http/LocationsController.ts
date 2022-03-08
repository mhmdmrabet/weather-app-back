import Location from "App/Models/Location";

export default class LocationsController {
  public async index() {
    const locations = await Location.query().orderBy("updated_at", "desc");
    return locations;
  }
}
