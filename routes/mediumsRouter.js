const { Router } = require("express");
const mediumsController = require("../controllers/mediumsController");
const mediumsRouter = Router();


mediumsRouter.get("/category/mediums", mediumsController.getAllMediums)
mediumsRouter.post("/medium/create", mediumsController.createMediumPost)
mediumsRouter.get("/medium/create", mediumsController.createMediumGet)
mediumsRouter.post("/category/mediums/delete/:id", mediumsController.mediumDeletePost)
mediumsRouter.get("/category/mediums/:id", mediumsController.getMedium)


module.exports =  mediumsRouter;
