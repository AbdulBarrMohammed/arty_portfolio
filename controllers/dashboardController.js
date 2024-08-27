const db = require("../db/dashboardQueries");
const artistdb = require("../db/artistQueries");

async function getAllArtists(req, res) {

    const artists = await artistdb.getAllArtists();


    res.render("index", { title: "Artists", artists: artists})
}



module.exports =  {
    getAllArtists,

  }
