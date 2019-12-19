const { Router } = require("express");
const router = new Router();
const users = require("../controllers/users");

router.post("/users", users.post);
router.get("/users", users.get);
router.put("/users", users.put);
router.delete("/users", users.delete);

module.exports = router;
