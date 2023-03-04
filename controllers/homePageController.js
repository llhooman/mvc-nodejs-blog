const Category = require("../models/Category");
const Post = require("../models/Post");
const homePageController = async (req, res) => {
    console.log("req.user is:", req.user);
    // Find all posts
    const numberOfPosts = await Post.count();
    const currentPage = Number(req.query.page) || 0;
    const numberOfPages = numberOfPosts / 7 + (numberOfPosts % 7 === 0 ? 0 : 1);
    const offset = (Number(req.query.page) - 1) * 7 || 0;
    const posts = await Post.findAll({
        offset: offset,
        limit: 7,
        order: [["id", "DESC"]]
    });
    const categories = await Category.findAll();

    res.render("index", {
        posts,
        categories,
        numberOfPosts,
        numberOfPages,
        currentPage,
        user: req.user
    });
};
module.exports = homePageController;
