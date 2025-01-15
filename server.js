const express = require("express");
const path = require("path");

const app = express();

//setup static folder
// app.use(express.static(path.join(__dirname, "public")));
let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
  { id: 4, title: "Post Four" },
];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.listen(8000, () => console.log("Server is running on port 8000"));
