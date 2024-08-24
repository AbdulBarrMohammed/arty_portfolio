const { Router } = require("express");
const locationsController = require("../controllers/locationsController");
const locationsRouter = Router();


locationsRouter.get("/category/locations", locationsController.getAllLocations)
locationsRouter.post("/location/create", locationsController.createLocationPost)
locationsRouter.get("/location/create", locationsController.createLocationGet)
locationsRouter.post("/category/locations/delete/:id", locationsController.locationDeletePost)
locationsRouter.get("/category/locations/:id", locationsController.getLocation)


module.exports = locationsRouter;
