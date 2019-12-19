const express = require("express");
const app = express();
const { PORT } = require("./config");

app.get("/", (req, res) => {
  res.send("root");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
