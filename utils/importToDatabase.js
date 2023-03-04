const postsData = require("../public/assets/initialPostsData");
const Post = require("../models/Post");

const importToDb = () => {
    postsData.map(async (post) => {
        const newPost = await Post.create({
            title: post.title,
            desc: post.desc,
            image: post.image,
            categoryId: post.categoryId,
            tags: post.tags,
            authorId: post.authorId,
            createdAt: Date.now(),
            updatedAt: Date.now()
        });
        console.log(newPost);
    });
};
importToDb();
