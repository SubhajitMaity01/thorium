const express = require('express');
//const { route } = require('express/lib/application');
const router = express.Router();
const AuthorController= require("../controller/authorController")
const BlogController=require("../controller/blogController")
const mw = require("../middleware/middle")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//Create Author
router.post("/createAuthor",AuthorController.createAuthor)

//Create blog
router.post("/createBlog",mw.authentication,BlogController.createBlog)

//Get blog
router.get("/getBlog",mw.authentication,BlogController.getBlogs)

//delete blog by path params
router.delete("/deleteBlog/:blogId", mw.authentication,mw.authorization,BlogController.deleteBlog)

//delete blog by query params
router.delete("/newDeleteBlog",mw.authentication,mw.authorization,BlogController.deleteNewBlog)

//update blog
router.put("/updateData/:blogId",mw.authentication,mw.authorization,BlogController.updatedBlog)

//login Author
router.post("/loginAuthor", AuthorController.loginAuthor)

module.exports=router;