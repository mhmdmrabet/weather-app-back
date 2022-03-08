import Route from "@ioc:Adonis/Core/Route";

export default function locationRoutes() {
  Route.group(() => {
    Route.get("/", "LocationsController.index").as("location.index");
  }).prefix("locations");
}
