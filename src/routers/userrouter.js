const userController = require("./controllers/controller.js");

const router = require("express").Router();

router.post("/addUser", userController.adduser);
router.get("/allUsers", userController.getAllusers);
router.get("/:id", userController.getuser);
router.put("/:id", userController.updateuser);
router.delete("/:id", userController.deleteuser);
module.exports = router;