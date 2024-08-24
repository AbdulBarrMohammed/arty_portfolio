const pool = require("./pool");

async function getAllStyles() {
  const { rows } = await pool.query("SELECT * FROM styles");
  return rows;
}

async function insertNewStyle(style) {
    const query = `
    INSERT INTO styles (art_style)
    VALUES ($1)`;

    await pool.query(query, [style]);
}

async function getStyle(id) {
    const result = await pool.query("SELECT * FROM styles WHERE id = $1", [id]);
    return result.rows[0];
}

async function deleteStyle(id) {

    const query = `
    DELETE FROM styles
    WHERE id = $1;
    `;

    await pool.query(query, [id]);

}

async function getArtworksOnStyle(style) {
    const { rows } = await pool.query("SELECT * FROM artworks WHERE style = $1", [style]);
    return rows;

}
module.exports = {
  deleteStyle,
  getAllStyles,
  getStyle,
  insertNewStyle,
  getArtworksOnStyle

};
