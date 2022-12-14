const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is great!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, wonderfull work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! everyone who have contributed ROCKS!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We BROKE ALL RECORDS! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is AWESOME news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our best and the most awaited time. Keep up the nice work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very nice tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "amazing tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;