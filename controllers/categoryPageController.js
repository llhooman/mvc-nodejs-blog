const Category = require("../models/Category");
const Post = require("../models/Post");
const categoryPageController = async (req, res) => {
    const categories = await Category.findAll();
    const requstedCategory = Number(req.params.id);
    const currentPage = Number(req.query.page) || 0;
    const offset = (Number(req.query.page) - 1) * 7 || 0;
    const numberOfPosts = await Post.count({
        where: {
            categoryId: requstedCategory
        },
        offset: offset,
        limit: 7,
        order: [["id", "DESC"]]
    });
    const numberOfPages = numberOfPosts / 7 + (numberOfPosts % 7 === 0 ? 0 : 1);
    const posts = await Post.findAll({
        where: { categoryId: requstedCategory },
        offset: offset,
        limit: 7,
        order: [["id", "DESC"]]
    });
    res.render("category", {
        posts,
        categories,
        requstedCategory,
        numberOfPosts,
        currentPage,
        numberOfPages
    });
};
module.exports = categoryPageController;
