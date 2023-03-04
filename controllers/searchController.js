const Category = require("../models/Category");
const Post = require("../models/Post");
const { Op } = require("sequelize");
const searchController = async (req, res) => {
    const categories = await Category.findAll();
    const requstedQuery = req.query.q;
    const posts = await Post.findAll({
        where: {
            title: { [Op.like]: `%${requstedQuery}%` }
        }
    });
    const numberOfPosts = await Post.count({});
    const numberOfPages = numberOfPosts / 7 + (numberOfPosts % 7 === 0 ? 0 : 1);
    res.render("search", {
        posts,
        categories,
        numberOfPosts,
        numberOfPages
    });
    console.log(requstedQuery);
};
module.exports = searchController;
