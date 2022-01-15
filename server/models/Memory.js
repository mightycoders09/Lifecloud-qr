const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type: String
        },
        lastName:{
            type: String
        },
        file: {
            type: Array
        },
        description: {
            type: String
        },
        likes: {
            type: Array
        },
        comments: {
            userId: String,
            text: String
        },
        originalUser: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    },
    {
        timestamps: true,
    }
);

const Memory = mongoose.model('Memory', UserSchema);

module.exports = { Memory };
