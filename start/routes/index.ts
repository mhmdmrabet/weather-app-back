import Route from "@ioc:Adonis/Core/Route";
import Env from "@ioc:Adonis/Core/Env";
import authRoutes from "./auth";
import homeRoutes from "./home";
import locationRoutes from "./location";
import weatherRoutes from "./weather";

Route.on("/").redirectToPath(`/api/v${Env.get("API_VERSION")}`);

homeRoutes();

Route.group(() => {
  Route.group(() => {
    authRoutes();
    locationRoutes();
    weatherRoutes();
  })
    .prefix("/v1")
    .as("v1");
})
  .prefix("/api")
  .as("api");
