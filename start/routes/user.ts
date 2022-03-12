import Route from "@ioc:Adonis/Core/Route";

export default function userRoutes() {
  Route.group(() => {
    Route.get("", "UsersController.show").as("users.show");
  })
    .prefix("users")
    .middleware("auth");
}
