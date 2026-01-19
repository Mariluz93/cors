const express = require("express");
const cors = require("cors");
const characterRoutes = require("./routes/routes.js");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a la API de Rick and Morty</h1>");
});

app.use("/characters", characterRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});