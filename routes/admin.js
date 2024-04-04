const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("SORRY YOU ARE NOT ADMİN");
});

router.get("/topsecret", (req, res) => {
  res.send("This Is TOP SECRET");
});
router.get("/deleteeverything", (req, res) => {
  res.send("OK DELETED IT ALL");
});

module.exports = router;
