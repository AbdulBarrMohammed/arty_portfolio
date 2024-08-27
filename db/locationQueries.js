const pool = require("./pool");

async function getAllLocations() {
  const { rows } = await pool.query("SELECT * FROM locations");
  return rows;
}

async function insertNewLocation(city) {
    const query = `
    INSERT INTO locations (city)
    VALUES ($1)`;

    await pool.query(query, [city]);
}

async function getLocation(id) {
    const result = await pool.query("SELECT * FROM locations WHERE id = $1", [id]);
    return result.rows[0];
}

async function deleteLocation(id) {

    const query = `
    DELETE FROM locations
    WHERE id = $1;
    `;

    await pool.query(query, [id]);

}

async function deleteLocationInOtherTables(location) {
    const query = `
    DELETE FROM artworks
    WHERE location = $1;
    `;

    await pool.query(query, [location]);
}

async function getArtworksOnLocation(location) {
    const { rows } = await pool.query("SELECT * FROM artworks WHERE location = $1", [location]);
    return rows;

}
module.exports = {
  deleteLocation,
  getAllLocations,
  getLocation,
  insertNewLocation,
  getArtworksOnLocation,
  deleteLocationInOtherTables

};
