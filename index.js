const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config");
const app = express();

const routes = require("./routes");

app.use(bodyParser.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
