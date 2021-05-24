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

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
