const pool = require("./pool");

async function getAllArtworks() {
  const { rows } = await pool.query("SELECT * FROM artworks");
  return rows;
}

async function insertNewArtwork({artist, medium, title, year, style, location, img_url}) {
    const query = `
    INSERT INTO artworks (artist, medium, title, year, style, location, img_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;

    await pool.query(query, [artist, medium, title, year, style, location, img_url]);
}

async function getArtwork(id) {

    const result = await pool.query("SELECT * FROM artworks WHERE id = $1", [id]);
    return result.rows[0];
}

async function deleteArtwork(id) {

    const query = `
    DELETE FROM artworks
    WHERE id = $1;
    `;

    await pool.query(query, [id]);

}



async function updateArtwork(id, {artist, medium, title, year, style, location, img_url}) {

    const query = `
    UPDATE artworks
    SET artist = $1, medium = $2, title = $3, year = $4, style = $5, location = $6, img_url = $7
    WHERE id = $8;
    `;

    const result = await pool.query(query, [artist, medium, title, year, style, location, img_url, id]);
}

async function deleteArtWorkLocation(location) {
  const query = `
    DELETE FROM location
    WHERE city = $1;
    `;

    await pool.query(query, [location]);

}
module.exports = {
  updateArtwork,
  deleteArtwork,
  getAllArtworks,
  getArtwork,
  insertNewArtwork,
  deleteArtWorkLocation

};
