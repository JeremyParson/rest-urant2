// PLACES DATA
// MODEL
const Place = require('../models/places')

const express = require("express");
const router = express.Router();

// Index places
router.get("/", async (req, res) => {
  const places = await Place.find()
  res.render("places/index", { places });
});

// Get new place form
router.get("/new", (req, res) => {
  res.render("places/new");
});

// New place
router.post("/", async (req, res) => {
  try {
    const newPlace = await Place.create(req.body)
    console.log(newPlace)
    res.status(301).redirect("/places");
  } catch (err) {
    console.log(err)
  }
});

// 
router.get("/:id", async (req, res) => {
  try {
    const place = await Place.findOne({_id: req.params.id})
    res.render("places/show", place);
  } catch (err) {
    console.log(err)
    res.render("error404");
  }
});

// Delete place
router.delete("/places/:id", async (req, res) => {
  try {
    await Place.deleteOne({_id: req.params.id})
    res.redirect("/places");
  } catch (err) {
    console.log(err)
  }
});

// Edit
router.get("/:id/edit", async (req, res) => {
  try {
    const place = await Place.findOne({_id: req.params.id})
    res.render("places/edit", place);
  } catch (err) {
    console.log(err)
    res.render("error404");
  }
});

router.put("/:id", async(req, res) => {
  try {
    const result = await Place.updateOne({_id: req.params.id}, req.body)
    res.redirect(`/places/${req.params.id}`);
  } catch (err) {
    console.log(err)
    res.render("error404");
  }
});

module.exports = router;
