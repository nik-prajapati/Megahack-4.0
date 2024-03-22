const {
    getDoctos
  } = require("../controllers/doctorController");
  

  const router = require("express").Router();
  
  router.get("/", getDoctos);
  
  module.exports = router;
  