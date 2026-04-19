const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello from Project 6 ");
});


app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
