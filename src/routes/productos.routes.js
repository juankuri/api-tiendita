const express = require("express");
const { getProductos } = require("../controllers/productos.controller");
const { postProducto } = require("../controllers/productos.controller");
const { getProductoById } = require("../controllers/productos.controller");

const router = express.Router();

router.get("/", getProductos);
router.post("/", postProducto);
router.get("/:id", getProductoById);

module.exports = router;
