const { Router } = require("express");
const router = new Router();
const users = require("../../controllers/users");

router.post("/", users.post);
router.get("/", users.get);
router.put("/:id", users.put);
router.delete("/:id", users.delete);

module.exports = router;
