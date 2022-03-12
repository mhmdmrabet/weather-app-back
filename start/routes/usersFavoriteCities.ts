import Route from "@ioc:Adonis/Core/Route";

export default function usersFavoriteCitiesRoutes() {
  Route.group(() => {
    Route.get("", "UsersFavoriteCitiesController.index").as("usersFavoriteCities.index");
    Route.post("/:cityName", "UsersFavoriteCitiesController.attach").as(
      "usersFavoriteCities.attach"
    );
    Route.delete("/:cityName", "UsersFavoriteCitiesController.dettach").as(
      "usersFavoriteCities.dettach"
    );
  })
    .prefix("/users/cities")
    .middleware("auth");
}
