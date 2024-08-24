const db = require("../db/artistQueries");


async function getAllArtists(req, res) {

    const artists = await db.getAllArtists();
    console.log(artists.imgUrl);
    res.render("artists/artists", { title: "Artists", artists: artists})
}

async function createArtistPost(req, res) {

    const {name, date_of_birth, date_of_death, img_url} = req.body;
    db.insertNewArtist({name, date_of_birth, date_of_death, img_url});
    res.redirect("/")
}

async function createArtistGet(req, res) {

    res.render("artists/createArtist", {title: 'Create New Artist'})

}

async function artistDeletePost(req, res) {

    db.deleteArtist(req.params.id);
    res.redirect("/")
}

async function artistUpdateGet(req, res) {
    const artist = await db.getArtist(req.params.id);
    console.log("artist below: ")
    console.log(artist);
    res.render("artists/updateArtist", {
        title: "Update Artist",
        artist: artist,
    });
}

async function artistUpdatePost(req, res) {
    const {name, date_of_birth, date_of_death, img_url} = req.body;
    db.updateArtist(req.params.id, {name, date_of_birth, date_of_death, img_url});
    res.redirect("/")
}

function formatDate(dateString) {
    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Extract day, month, and year
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-indexed
    let year = date.getFullYear() % 100; // Get last two digits of the year

    // Convert day, month, and year to strings
    day = day.toString();
    month = month.toString();
    year = year.toString();

    // Format the date as "day/month/year"
    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
}

async function getArtist(req, res) {
    const id = req.params.id;
    const artist = await db.getArtist(id);

    if (!artist) {
        return res.status(404).send("Artist not found");
    }
    const birthDate = formatDate(artist.date_of_birth);
    const deathDate = formatDate(artist.date_of_death);
    const name = artist.name;
    const img_url = artist.img_url
    const artwork = await db.getArtworkByName(name);

    res.render("artists/selectedArtist", {title: "Artists", name: name, birthDate: birthDate, deathDate: deathDate, img_url: img_url, artwork: artwork});
}
module.exports =  {
    getAllArtists,
    createArtistPost,
    createArtistGet,
    artistDeletePost,
    artistUpdateGet,
    artistUpdatePost,
    getArtist
  }
