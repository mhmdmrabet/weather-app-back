import Route from "@ioc:Adonis/Core/Route";
import authRoutes from "./auth";

Route.group(() => {
  Route.group(() => {
    authRoutes();
  })
    .prefix("/v1")
    .as("v1");
})
  .prefix("/api")
  .as("api");
