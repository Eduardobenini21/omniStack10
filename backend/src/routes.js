const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);
routes.put("/search/:id", SearchController.update);
routes.delete("/search/:id", SearchController.destroy);

module.exports = routes;
