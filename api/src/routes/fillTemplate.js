const { Router } = require("express");

const router = Router();

router.post("/", (req, res) => {
  console.log("Rellenando un formulario con dox-template");
  res.status(200).send("Rellenando un formulario con dox-template");
});

module.exports = router;
