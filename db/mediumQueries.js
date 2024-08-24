const pool = require("./pool");

async function getAllMediums() {
  const { rows } = await pool.query("SELECT * FROM mediums");
  return rows;
}

async function insertNewMedium(material) {
    const query = `
    INSERT INTO mediums (material)
    VALUES ($1)`;

    await pool.query(query, [material]);
}

async function getMedium(id) {
    const result = await pool.query("SELECT * FROM mediums WHERE id = $1", [id]);
    return result.rows[0];
}

async function deleteMedium(id) {

    const query = `
    DELETE FROM mediums
    WHERE id = $1;
    `;

    await pool.query(query, [id]);

}

async function getArtworksOnMedium(material) {
    const { rows } = await pool.query("SELECT * FROM artworks WHERE medium = $1", [material]);
    return rows;

}
module.exports = {
  deleteMedium,
  getAllMediums,
  getMedium,
  insertNewMedium,
  getArtworksOnMedium

};
