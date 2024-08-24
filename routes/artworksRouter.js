const { Router } = require("express");
const artworksController = require("../controllers/artworksController");
const artworksRouter = Router();


artworksRouter.get("/category/artworks", artworksController.getAllArtworks)
artworksRouter.post("/artwork/create", artworksController.createArtworkPost)
artworksRouter.get("/artwork/create", artworksController.createArtworkGet)
artworksRouter.post("/category/artworks/delete/:id", artworksController.artworkDeletePost)
artworksRouter.get("/category/artworks/update/:id", artworksController.artworkUpdateGet);
artworksRouter.post("/category/artworks/update/:id", artworksController.artworkUpdatePost);
artworksRouter.get("/category/artworks/:id", artworksController.getArtwork)


module.exports = artworksRouter;
