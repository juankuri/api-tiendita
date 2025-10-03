require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

// Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 4);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    Title: "Hola mundo!",
  });
});

app.use("/tiendita", require("./routes/index"));

// Iniciando el servidor...
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
