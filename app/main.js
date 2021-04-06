import MythologiesController from "./Controllers/MythologiesController.js";

class App {
  mythologiesController = new MythologiesController();
}

window["app"] = new App();
