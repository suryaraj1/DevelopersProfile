const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => res.send("Hello Node"));

app.listen(port, () => console.log(`Listening on port ${port}`));
