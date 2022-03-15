const express = require('express');
//const { route } = require('express/lib/application');
const router = express.Router();
const AuthorController= require("../controller/authorController")
const BlogController=require("../controller/blogController")
//const middleware = require ("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor",AuthorController.createAuthor)
router.post("/createBlog",BlogController.createBlog)
router.get("/getBlog",BlogController.getBlogs)
router.delete("/deleteBlog/:blogId",BlogController.deleteBlog)
router.delete("/newDeleteBlog",BlogController.deleteNewBlog)
router.put("/updateData/:blogId",BlogController.updatedBlog)

module.exports=router;