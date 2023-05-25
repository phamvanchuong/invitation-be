const express = require("express");
const { home, postHome } = require("../controllers/homeController");
const router = express.Router();

router.get("/", home);
router.post("/answer", postHome);

module.exports = router;
