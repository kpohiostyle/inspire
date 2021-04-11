import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TodosController from "./Controllers/TodosController.js";
import WeatherController from "./Controllers/WeatherController.js"

class App {
  imagesController = new ImagesController();
  todosController = new TodosController();
  weatherController = new WeatherController();
  quotesController = new QuotesController();
}

window["app"] = new App();
