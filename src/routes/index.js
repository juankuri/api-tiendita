const express = require("express");
const productosRoutes = require("./productos.routes");

const router = express.Router();

//Raiz
router.get("/ping", (req, res) => {
  res.json({
    Title: "Hola 127.0.0.1!",
  });
});

router.use("/productos", productosRoutes);

module.exports = router;
