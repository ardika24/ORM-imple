const express = require("express");
const res = require("express/lib/response");
const { Sneaker } = require("./models");

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/sneakers", (req, res) => {
  Sneaker.findAll().then((sneakers) => {
    res.render("articles/index", {
      sneakers,
    });
  });
});

app.get("/sneakers/create", (req, res) => {
  res.render("articles/create");
});

app.post("/sneakers", (req, res) => {
  Sneaker.create({
    name: req.body.name,
    description: req.body.description,
    variant: req.body.variant,
    price: req.body.variant,
  }).then((sneakers) => {
    res.send("Article baru berhasil dibuat");
  });
});

app.get("/sneakers/:id", (req, res) => {
  Sneaker.findOne({
    where: { id: req.params.id },
  }).then((sneakers) => {
    res.render("articles/show", sneakers.dataValues);
  });
});

app.listen(PORT, () => {
  console.log(`Server is Listening on http://localhost:${PORT}`);
});
