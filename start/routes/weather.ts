import Route from "@ioc:Adonis/Core/Route";

export default function weatherRoutes() {
  Route.group(() => {
    Route.get("/:city", "WeatherController.getWeather").as("weather.store");
  }).prefix("weather");
}
