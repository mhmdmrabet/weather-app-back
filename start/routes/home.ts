import Route from "@ioc:Adonis/Core/Route";
import Env from "@ioc:Adonis/Core/Env";

export default function homeRoutes() {
  Route.get(`/api/v${Env.get("API_VERSION")}`, () => {
    return {
      message: `Welcome to version ${Env.get("API_VERSION")} of the weather app!`,
      success: true,
    };
  });
}
