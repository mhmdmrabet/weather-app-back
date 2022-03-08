import Route from "@ioc:Adonis/Core/Route";

export default function locationRoutes() {
  Route.group(() => {
    Route.get("/:city", "LocationsController.storeLocation").as("location.store");
  }).prefix("locations");
}
