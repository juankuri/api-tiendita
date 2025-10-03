const pool = require("../config/db");

const getProductos = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM productos ORDER BY id_producto ASC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductoById = (request, response) => {
  const id_producto = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM productos WHERE id_producto = $1",
    [id_producto],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const postProducto = (request, response) => {
  const { nombre_producto, descripcion, precio, existencias, sku } =
    request.body;

  pool.query(
    "INSERT INTO productos (nombre_producto, descripcion, precio, existencias, sku) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [nombre_producto, descripcion, precio, existencias, sku],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send("Porducto agregado exitosamente");
    }
  );
};

module.exports = { getProductos, postProducto, getProductoById };
