import ImagesController from "./Controllers/ImagesController.js";
import TodosController from "./Controllers/TodosController.js";

class App {
  imagesController = new ImagesController();
  todosController = new TodosController();
}

window["app"] = new App();
