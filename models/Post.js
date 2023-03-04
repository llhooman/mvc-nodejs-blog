const { DataTypes } = require("sequelize");
const db = require("../configs/db");

const Post = db.define(
    "posts",
    {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        categoryId: {
            type: DataTypes.NUMBER
        },
        tags: {
            type: DataTypes.STRING
        },
        authorId: {
            type: DataTypes.NUMBER
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    },
    {
        // Other model options go here
    }
);
module.exports = Post;
