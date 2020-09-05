const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("Hi Tasdere");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
