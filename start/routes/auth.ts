import Route from "@ioc:Adonis/Core/Route";

export default function authRoutes() {
  Route.group(() => {
    Route.post("register", "AuthController.register").as("auth.register");
    Route.post("login", "AuthController.login").as("'auth.login");
    Route.delete("logout", "AuthController.logout").as("auth.logout");
  });
}
