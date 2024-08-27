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

    res.render("locations/createLocation", {title: 'Add New Location'})

}

async function locationDeletePost(req, res) {

    const id = req.params.id;
    const location = await db.getLocation(id);

    const locationCity = location.city;
    db.deleteLocationInOtherTables(locationCity)

    db.deleteLocation(id);

    res.redirect("/")
}



async function getLocation(req, res) {
    const id = req.params.id;
    const location = await db.getLocation(id);
    const city = location.city
    const artworks = await db.getArtworksOnLocation(city);

    res.render("locations/selectedLocation", {title: "Artworks", location: location, artworks: artworks});
}
module.exports =  {
    getAllLocations,
    createLocationPost,
    createLocationGet,
    locationDeletePost,
    getLocation
  }
