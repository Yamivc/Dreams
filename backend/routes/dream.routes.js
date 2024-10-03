module.exports = app => {

    const dreams = require("../controllers/dream.controller.js")

    var router = require("express").Router();

    router.post("/", dreams.create);

    router.get("/", dreams.findAll);

    router.put("/", dreams.update);
    
    router.delete("/", dreams.delete);

    app.use('/api/dreams', router)
    
}