// places data
let placesData = require("../places");

const express = require("express");
const places = express.Router();

// Index places
places.get("/", (req, res) => {
  res.render("places/index", { places: placesData });
});

// Get new place form
places.get("/new", (req, res) => {
  res.render("places/new");
});

// New place
places.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  placesData.push(req.body);
  res.status(301).redirect("/places");
});

places.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!placesData[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: placesData[id], id });
  }
});

// Delete place
places.delete("/places/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!placesData[id]) {
    res.render("error404");
  } else {
    placesData.splice(id, 1);
    res.redirect("/places");
  }
});

// Edit
places.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!placesData[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: placesData[id] })
  }
})

module.exports = places;
