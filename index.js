const express = require('express');
const app = express();
const port = 8080;


//SERVEUR
app.listen(port, () => {
  console.log(`le serveur tourne au port ${port}`)
})