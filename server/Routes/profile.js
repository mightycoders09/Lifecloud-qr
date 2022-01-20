
const Router = require('express')
const { profileModel } = require('./../models/Profile')
const ProfileRouter = Router();
const multer = require('multer')
var storage = multer.diskStorage({
    destination: "./server/picUploader/",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
let uploadpic = multer({ storage: storage });
// create profile
ProfileRouter.post('/createProfile', uploadpic.fields([{ name: 'profileImg', maxCount: 1 }, { name: 'wallImg', maxCount: 1 }, { name: 'multiplefiles', maxCount: 20 }]), async (req, res) => {
    try {
        //gen new password
        const url = req.protocol + '://' + req.get('host')
        console.log(req.body, 'body')
        console.log(req.files, 'file')
        let multiFiles = req.files.multiplefiles.map(res => {
            return res.path.slice(7)
        })
        console.log(multiFiles, 'multiFiles')
        //new user
        let newUser = new profileModel({
            originalUser: req.body.originalUser,
            gallery: multiFiles,
            profileImg: req.files.profileImg[0].path.slice(7),
            wallImg: req.files.wallImg[0].path.slice(7),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            birthDate: req.body.birthDate,
            deathDate: req.body.deathDate,
            wazeLocation: req.body.wazeLocation,
            description: req.body.description,
            googleLocation: req.body.googleLocation,
            lifeAxis: req.body.lifeAxis,

        });

        //save and response
        newUser.save().then(resp => {
            res.send(resp)
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

ProfileRouter.put('/updateProfile', uploadpic.fields([{ name: 'profileImg', maxCount: 1 }, { name: 'wallImg', maxCount: 1 }, { name: 'multiplefiles', maxCount: 20 }]), async (req, res) => {
    try {
        //gen new password

        const url = req.protocol + '://' + req.get('host')
        console.log(req.body, 'body')
        console.log(req.files, 'file')
        //new user
        let multiFiles = req.files && req.files.multiplefiles && req.files.multiplefiles.map(res => {
            return res.path.slice(7)
        })
        if (req.files.profileImg && req.files.wallImg) {
            var dataSource = {
                originalUser: req.body.originalUser,
                profileImg: req.files.profileImg[0].path.slice(7),
                wallImg: req.files.wallImg[0].path.slice(7),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                birthDate: req.body.birthDate,
                deathDate: req.body.deathDate,
                wazeLocation: req.body.wazeLocation,
                description: req.body.description,
                googleLocation: req.body.googleLocation,
                lifeAxis: req.body.lifeAxis,
            }
        } else if (req.files.wallImg) {
            var dataSource = {
                originalUser: req.body.originalUser,
                // profileImg: req.files.profileImg[0].path.slice(7),
                wallImg: req.files.wallImg[0].path.slice(7),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                birthDate: req.body.birthDate,
                deathDate: req.body.deathDate,
                wazeLocation: req.body.wazeLocation,
                description: req.body.description,
                googleLocation: req.body.googleLocation,
                lifeAxis: req.body.lifeAxis,
            }
        } else if (req.files.profileImg) {
            var dataSource = {
                originalUser: req.body.originalUser,
                profileImg: req.files.profileImg[0].path.slice(7),
                // wallImg: req.files.wallImg[0].path.slice(7),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                birthDate: req.body.birthDate,
                deathDate: req.body.deathDate,
                wazeLocation: req.body.wazeLocation,
                description: req.body.description,
                googleLocation: req.body.googleLocation,
                lifeAxis: req.body.lifeAxis,
            }
        } else {
            var dataSource = {
                originalUser: req.body.originalUser,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                birthDate: req.body.birthDate,
                deathDate: req.body.deathDate,
                wazeLocation: req.body.wazeLocation,
                description: req.body.description,
                googleLocation: req.body.googleLocation,
                lifeAxis: req.body.lifeAxis,
            }
        }
        profileModel.findOneAndUpdate({ _id: req.body._id },
            {
                $set: dataSource,
                $push: {
                    gallery: {
                        $each: multiFiles,
                        $position: 0
                    }
                }
            },

            { upsert: true }, (err, doc) => {
                if (err) { throw err; }
                else {
                    console.log("Updated", doc);
                    res.send(true)
                }

            }
        );

    } catch (err) {
        res.status(500).json(err);
    }
});


ProfileRouter.get('/getallprofile', (req, res) => {
    profileModel
        .find({})
        .populate("originalUser") // key to populate
        .then(resonse => {
            if (!resonse) {
                return res.status(404).json({
                    message: 'data not found'
                })
            }
            res.json(resonse);
        });
})

ProfileRouter.get('/getallprofileofSingleUser/:id', (req, res, next) => {

    profileModel.find({ originalUser: req.params.id })
        .populate("originalUser").exec() // key to populate
        .then(resonse => {
            if (!resonse) {
                return res.status(404).json({
                    message: 'data not found'
                })
            }
            res.json(resonse);
        });
})

ProfileRouter.get('/getSingleProfileDetails/:id', (req, res, next) => {

    profileModel.findById(req.params.id)
        .populate("originalUser").exec() // key to populate
        .then(resonse => {
            if (!resonse) {
                return res.status(404).json({
                    message: 'data not found'
                })
            }
            res.json(resonse);
        });
})


ProfileRouter.put('/addFriends/:id', async (req, res) => {

    let profileAccess = await profileModel.findById(req.params.id)
    let pullreq = profileAccess.addFriends.find(friend => {
        return friend.user == req.body.userId
    })
    console.log(pullreq, req.body.userId, 'pro')
    if (pullreq && pullreq.user == req.body.userId) {
        let result = await profileAccess.updateOne({
            $pull: {
                addFriends: { user: req.body.userId, isFriend: req.body.isFriend }
            }
        }, {
            upsert: true //to return updated document
        });
        res.send(profileAccess);
    } else {
        let result = await profileAccess.updateOne({
            $push: {
                addFriends: {
                    $each: [{ user: req.body.userId, isFriend: req.body.isFriend }],
                    $position: -1
                }
            }
        }, {
            upsert: true //to return updated document
        });
        res.send(profileAccess);
    }


})

ProfileRouter.get('/addAdmins/:id', async (req, res, next) => {

    let profileAccess = profileModel.findById(req.params.id)
        .populate("originalUser").exec() // key to populate
        .then(resonse => {
            if (!resonse) {
                return res.status(404).json({
                    message: 'data not found'
                })
            }
            res.json(resonse);
        });
    await profileAccess.updateOne({
        $push: {
            addAdmins: {
                $each: [{ user: req.body.userId, isAdmin: req.body.isAdmin }],
                $position: -1
            }
        }
    }, {
        upsert: true //to return updated document
    });
    res.status(200).json('access accepted');

})


module.exports = { ProfileRouter };