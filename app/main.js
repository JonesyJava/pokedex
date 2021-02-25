import MyPokemonController from "./Controllers/MyPokeController.js";
import PokeAPIController from "./Controllers/PokeAPIController.js"

class App {
  pokeApiController = new PokeAPIController();

  myPokeService = new MyPokemonController();
}

window["app"] = new App();
