const express = require("express");
const app = express();
const { PORT } = require("./config");

const routes = require("./routes");

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
