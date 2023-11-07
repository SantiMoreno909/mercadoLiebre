const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(3001, () => {
  console.log("Servidor funcionando en 3001");
});

//Definimos dónde buscamos archivos js, css e imagenes
app.use("", express.static(`${__dirname}/publics`));

//definimos las distintas rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});
