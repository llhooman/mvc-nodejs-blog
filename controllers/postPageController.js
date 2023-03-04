const Post = require("../models/Post");
const Category = require("../models/Category");
const postPageController = async (req, res) => {
    const requiredPostId = Number(req.params.id);
    const categories = await Category.findAll();
    const post = await Post.findAll({
        where: { id: requiredPostId }
    });
    const requiredPostIdCategoryId = post[0].categoryId;
    const similarPosts = await Post.findAll({
        where: { categoryId: requiredPostIdCategoryId }
    });
    res.render("posts", { post: post[0], similarPosts, categories });
};

module.exports = postPageController;
