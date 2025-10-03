const express = require("express");
const { getProductos } = require("../controllers/productos.controller");
const { postProducto } = require("../controllers/productos.controller");
const { getProductoById } = require("../controllers/productos.controller");
const { body, validationResult } = require("express-validator");

const router = express.Router();

const validateProducto = [
  body("nombre_producto")
    .isString()
    .withMessage("El nombre debe ser texto")
    .isLength({ min: 1, max: 50 })
    .withMessage("El nombre debe tener entre 1 y 50 caracteres"),

  body("descripcion")
    .optional()
    .isString()
    .withMessage("La descripción debe ser texto"),

  body("precio")
    .isFloat({ gt: 0 })
    .withMessage("El precio debe ser un número mayor a 0"),

  body("existencias")
    .isInt({ min: 0 })
    .withMessage(
      "Las existencias deben ser un número entero mayor o igual a 0"
    ),

  body("sku")
    .isString()
    .withMessage("El SKU debe ser texto")
    .isLength({ max: 20 })
    .withMessage("El SKU no debe superar los 20 caracteres"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

router.get("/", getProductos);
router.post("/", validateProducto, postProducto);
router.get("/:id", getProductoById);

module.exports = router;
