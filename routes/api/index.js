const router = require("express").Router();
const users = require("./users");
const auth = require ("./auth");
const data = require ("./data");


router.use("/users", users);
router.use("/auth", auth);
router.use("/data", data);


module.exports = router;
