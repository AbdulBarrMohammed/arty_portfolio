const { Router } = require("express");
const stylesController = require("../controllers/stylesController");
const stylesRouter = Router();


stylesRouter.get("/category/styles", stylesController.getAllStyles)
stylesRouter.post("/style/create", stylesController.createStylePost)
stylesRouter.get("/style/create", stylesController.createStyleGet)
stylesRouter.post("/category/styles/delete/:id", stylesController.styleDeletePost)
stylesRouter.get("/category/styles/:id", stylesController.getStyle)


module.exports = stylesRouter;
