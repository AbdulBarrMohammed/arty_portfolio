const db = require("../db/mediumQueries");



async function getAllMediums(req, res) {

    const mediums = await db.getAllMediums();
    res.render("mediums/mediums", { title: "Mediums", mediums: mediums})
}

async function createMediumPost(req, res) {
    const { material } = req.body;
    db.insertNewMedium(material);
    res.redirect("/")
}

async function createMediumGet(req, res) {
    res.render("mediums/createMedium", {title: 'Add New Medium'})

}

async function mediumDeletePost(req, res) {

    const id = req.params.id;
    const medium = await db.getMedium(id);
    const material = medium.material;
    db.deleteMediumInOtherTables(material)
    db.deleteMedium(req.params.id);
    res.redirect("/")
}



async function getMedium(req, res) {
    const id = req.params.id;
    const medium = await db.getMedium(id);
    const material = medium.material
    const artworks = await db.getArtworksOnMedium(material);

    res.render("mediums/selectedMediums", {title: "Mediums", medium: medium, artworks: artworks});
}
module.exports =  {
    getAllMediums,
    createMediumPost,
    createMediumGet,
    mediumDeletePost,
    getMedium
  }
