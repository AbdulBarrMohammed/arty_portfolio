const { Router } = require("express");
const artistsController = require("../controllers/artistsController");
const artistsRouter = Router();


artistsRouter.get("/category/artists", artistsController.getAllArtists)
artistsRouter.post("/artist/create", artistsController.createArtistPost)
artistsRouter.get("/artist/create", artistsController.createArtistGet)
artistsRouter.post("/category/artists/delete/:id", artistsController.artistDeletePost)
artistsRouter.get("/category/artists/update/:id", artistsController.artistUpdateGet);
artistsRouter.post("/category/artists/update/:id", artistsController.artistUpdatePost);
artistsRouter.get("/category/artists/:id", artistsController.getArtist)


module.exports = artistsRouter;
