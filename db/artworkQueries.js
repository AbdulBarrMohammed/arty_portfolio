const pool = require("./pool");

async function getAllArtworks() {
  const { rows } = await pool.query("SELECT * FROM artworks");
  return rows;
}

async function insertNewArtwork({name, date_of_birth, date_of_death, img_url}) {
    /*const query = `
    INSERT INTO artists (name, date_of_birth, date_of_death, img_url)
    VALUES ($1, $2, $3, $4)`;

    await pool.query(query, [name, date_of_birth, date_of_death, img_url]); */
}

async function getArtwork(id) {
    /*
    //console.log("ID passed to getMessage:", id);
    const result = await pool.query("SELECT * FROM artists WHERE id = $1", [id]);
    //console.log(result)
    return result.rows[0] ; */
}

async function deleteArtwork(id) {

    const query = `
    DELETE FROM artworks
    WHERE id = $1;
    `;

    await pool.query(query, [id]);

}

async function updateArtwork(id, {name, date_of_birth, date_of_death, img_url}) {
    /*
    const query = `
    UPDATE artists
    SET name = $1, date_of_birth = $2, date_of_death = $3, img_url = $4
    WHERE id = $5;
    `;

    const result = await pool.query(query, [name, date_of_birth, date_of_death, img_url, id]); */
}
module.exports = {
  updateArtwork,
  deleteArtwork,
  getAllArtworks,
  getArtwork,
  insertNewArtwork,

};
