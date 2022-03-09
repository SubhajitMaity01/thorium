const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",auth.middleware1, userController.getUserData)

router.put("/users/:userId",auth.middleware1, userController.updateUser)

router.delete("/user/:userId",auth.middleware1,userController.deleteUser)

router.get("/users/:userId/posts",auth.middleware1, userController.postMessage)



module.exports = router;