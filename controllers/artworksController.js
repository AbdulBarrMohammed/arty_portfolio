const db = require("../db/artworkQueries");
const artistdb = require("../db/artistQueries")


async function getAllArtworks(req, res) {

    const artworks = await db.getAllArtworks();
    res.render("artworks/artworks", { title: "Artworks", artworks: artworks})
}

async function createArtworkPost(req, res) {

    const {artist, medium, title, year, style, location, img_url} = req.body;
    db.insertNewArtwork({artist, medium, title, year, style, location, img_url});
    res.redirect("/")
}

async function createArtworkGet(req, res) {

    const artists = await artistdb.getAllArtists();
    res.render("artworks/createArtwork", {title: 'Add New Artwork', artists: artists})

}

async function artworkDeletePost(req, res) {

    db.deleteArtwork(req.params.id);
    res.redirect("/")
}

async function artworkUpdateGet(req, res) {
    /* const artist = await db.getArtwork(req.params.id);
    res.render("artworks/updateArtwork", {
        title: "Update Artwork",
        artist: artist,
    }); */
}

async function artworkUpdatePost(req, res) {
    /* N
    const {artist, medium, title, year, style, location, img_url} = req.body;
    db.updateArtwork(req.params.id, {artist, medium, title, year, style, location, img_url});
    res.redirect("/") */
}


async function getArtwork(req, res) {
    const id = req.params.id;
    const artwork = await db.getArtwork(id);

    res.render("artworks/selectedArtwork", {title: "Artworks", artwork: artwork});
}
module.exports =  {
    getAllArtworks,
    createArtworkPost,
    createArtworkGet,
    artworkDeletePost,
    artworkUpdateGet,
    artworkUpdatePost,
    getArtwork
  }
