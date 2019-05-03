
const router = require("express").Router();
const dataController = require ('../../controllers/dataController');


// AKA /api/data

router.route("/")
  .get(dataController.findAll)
  .post(dataController.create);

// AKA /api/data/:id

router
  .route("/:id")
  .get(dataController.findById)
  .put(dataController.update)
  .delete(dataController.remove);

module.exports = router;
