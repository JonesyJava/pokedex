import MyPokeController from "./Controllers/MyPokeController.js";
import PokeAPIController from "./Controllers/PokeAPIController.js"

class App {
  pokeApiController = new PokeAPIController();

  myPokeController = new MyPokeController();
}

window["app"] = new App();
