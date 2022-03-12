import Route from "@ioc:Adonis/Core/Route";
import Env from "@ioc:Adonis/Core/Env";
import authRoutes from "./auth";
import homeRoutes from "./home";
import locationRoutes from "./location";
import weatherRoutes from "./weather";
import userRoutes from "./user";
import usersFavoriteCitiesRoutes from "./usersFavoriteCities";

Route.on("/").redirectToPath(`/api/v${Env.get("API_VERSION")}`);

homeRoutes();

Route.group(() => {
  Route.group(() => {
    authRoutes();
    userRoutes();
    locationRoutes();
    weatherRoutes();
    usersFavoriteCitiesRoutes();
  })
    .prefix("/v1")
    .as("v1");
})
  .prefix("/api")
  .as("api");
