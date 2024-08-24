const db = require("../db/styleQueries");



async function getAllStyles(req, res) {

    const styles = await db.getAllStyles();
    res.render("styles/styles", { title: "Styles", styles: styles})
}

async function createStylePost(req, res) {
    const { artStyle } = req.body;
    db.insertNewStyle(artStyle);
    res.redirect("/")
}

async function createStyleGet(req, res) {

    //const artists = await artistdb.getAllLocations();
    //res.render("artworks/createArtwork", {title: 'Add New Artwork', artists: artists})

}

async function styleDeletePost(req, res) {

    db.deleteStyle(req.params.id);
    res.redirect("/")
}



async function getStyle(req, res) {
    const id = req.params.id;
    const style = await db.getStyle(id);
    const artStyle = style.art_style
    const artworks = await db.getArtworksOnStyle(artStyle);

    res.render("styles/selectedStyles", {title: "Mediums", style: style, artworks: artworks});
}
module.exports =  {
    getAllStyles,
    createStylePost,
    createStyleGet,
    styleDeletePost,
    getStyle
  }
