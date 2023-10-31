const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(3001, () => {
  console.log("Servidor funcionando en 3001");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
