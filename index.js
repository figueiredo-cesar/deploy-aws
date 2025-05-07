const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Server is up" });
});

app.post("/", (req, res) => {
  return res.json(req.body);
});

app.listen(3000);
