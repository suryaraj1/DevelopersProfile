const express = require("express");
const app = express();
const path = require("path");
const developers = require("./routes/api/developers");
const port = process.env.PORT || 3080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/developers", developers);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
