const db = require("../db/locationQueries");



async function getAllLocations(req, res) {

    const locations = await db.getAllLocations();
    res.render("locations/locations", { title: "Locations", locations: locations})
}

async function createLocationPost(req, res) {
    const { city } = req.body;
    db.insertNewLocation(city);
    res.redirect("/")
}

async function createLocationGet(req, res) {

    //const artists = await artistdb.getAllLocations();
    //res.render("artworks/createArtwork", {title: 'Add New Artwork', artists: artists})

}

async function locationDeletePost(req, res) {

    db.deleteLocation(req.params.id);
    res.redirect("/")
}



async function getLocation(req, res) {
    const id = req.params.id;
    const location = await db.getLocation(id);
    const city = location.city
    const artworks = await db.getArtworksOnLocation(city);



    console.log('artworks below')
    console.log(artworks)


    res.render("locations/selectedLocation", {title: "Artworks", location: location, artworks: artworks});
}
module.exports =  {
    getAllLocations,
    createLocationPost,
    createLocationGet,
    locationDeletePost,
    getLocation
  }
