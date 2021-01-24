const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Bom");
});

app.get("/demo", () => {
  res
    .status(418)
    .set("X-full-stack", "4life")
    .send("I show demo custom header");
});

app.listen(3000, () => {
  console.log("server is runing at 3000");
});
