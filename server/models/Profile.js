const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        originalUser: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        addAdmins: {
            type: Map,
            of: new mongoose.Schema({
                isAdmin: Boolean,
                user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
            })
        },
        // addAdmins: {
        //     user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        //     isAdmin: Boolean
        // },
        addFriends: [{
            user: String,
            isFriend: Boolean
        }],
        profileImg: {
            type: String
        },
        wallImg: {
            type: String
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        birthDate: {
            type: Date,
        },
        deathDate: {
            type: Date,
        },
        gender: {
            type: String
        },
        wazeLocation: {
            type: String
        },
        googleLocation: {
            type: String
        },
        description: {
            type: String
        },
        gallery: {
            type: Array
        },
        lifeAxis: {
            type: String
        },
    },
    { timestamps: true }
);

const profileModel = mongoose.model('Profile', PostSchema);

module.exports = { profileModel };
