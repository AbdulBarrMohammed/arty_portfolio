async function getAllArtists(req, res) {

    res.render("index", { title: "Artists"})
}


module.exports =  {
    getAllArtists
  }
