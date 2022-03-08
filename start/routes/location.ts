import Route from "@ioc:Adonis/Core/Route";

export default function locationRoutes() {
  Route.group(() => {
    Route.get("/", "LocationsController.index").as("location.index");
    Route.get("/:city", "LocationsController.storeLocation").as("location.store");
  }).prefix("locations");
}
