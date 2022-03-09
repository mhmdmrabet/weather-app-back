import Route from "@ioc:Adonis/Core/Route";

export default function weatherRoutes() {
  Route.group(() => {
    Route.get("/:city", "WeatherController.getWeatherByName").as("weather.storeByCity");
    Route.get("", "WeatherController.getWeatherByCoords").as("weather.storeByCoords");
  }).prefix("weather");
}
