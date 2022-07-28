const app = require("express")();
const fetch = require("node-fetch-commonjs");
const bodyParser = require("body-parser");
require("dotenv").config();

const routes = require("./routes.js");
let HOST = "127.0.0.1" || "0.0.0.0"; // Dev || Prod
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, HOST, () => {
  console.log(`Listening in port ${PORT}`);
});
