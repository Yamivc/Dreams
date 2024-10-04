module.exports = app => {

    const dreams = require("../controllers/dream.controller.js")

    var router = require("express").Router();

    router.post("/", dreams.create);

    router.get("/", dreams.findAll);

    router.get("/:id", dreams.findOne);

    router.put("/:id", dreams.update);
    
    router.delete("/:id", dreams.delete);

    app.use('/api/dreams', router)
    
}