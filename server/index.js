const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

// Middleware
app.use(express());
app.use(cors());

// API

app.get("/", (req, res) => {
  res.send("Hello Courses");
});

app.listen(port, () => {
  console.log(`server running on this ${port} port`);
});
