const db = require("../db/artworkQueries");
const artistdb = require("../db/artistQueries")
const mediumdb = require("../db/mediumQueries")
const locationdb = require("../db/locationQueries")
const styledb = require("../db/styleQueries")


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
    const mediums = await mediumdb.getAllMediums();
    const locations = await locationdb.getAllLocations();
    const styles = await styledb.getAllStyles();
    res.render("artworks/createArtwork", {title: 'Add New Artwork', artists: artists, mediums: mediums, locations:locations, styles: styles})

}

async function artworkDeletePost(req, res) {

    /* let deleteLocation = true;


    const id = req.params.id;

    const artwork = await db.getArtwork(id);
    const location = artwork.location;
    const style = artwork.style;
    const medium = artwork.medium;

    //db.deleteOtherArtworkInfo()
    db.deleteArtwork(id); */
    /*
    const artworks = await db.getAllArtworks();
    for (const key in artworks) {
        if (location in artworks[key]) {
            //delete location
            console.log('dont deleted location');
            deleteLocation = false;
        }
        if (style === artworks[key].style) {
            //delete style
        }
        if (medium === artworks[key].medium) {
            //delete medium
        }



    }
    if (deleteLocation) {
        db.deleteArtWorkLocation(location);
    }
    console.log(location);
    console.log(deleteLocation); */
    const id = req.params.id;
    db.deleteArtwork(id)



    res.redirect("/")
}

async function artworkUpdateGet(req, res) {

    const artwork = await db.getArtwork(req.params.id);
    const artists = await artistdb.getAllArtists();
    const mediums = await mediumdb.getAllMediums();
    const locations = await locationdb.getAllLocations();
    const styles = await styledb.getAllStyles();
    res.render("artworks/updateArtwork", {
        title: "Update Artwork",
        artwork: artwork,
        artists: artists,
        mediums: mediums, locations:locations, styles: styles
    });
}

async function artworkUpdatePost(req, res) {

    const {artist, medium, title, year, style, location, img_url} = req.body;
    db.updateArtwork(req.params.id, {artist, medium, title, year, style, location, img_url});
    res.redirect("/")
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
