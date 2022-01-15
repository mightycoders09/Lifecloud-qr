
const Router = require('express')
const { Memory } = require('./../models/Memory')
const MemoryRouter = Router();
const multer = require('multer')
var storage = multer.diskStorage({
    destination: "./server/picUploader/",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
let uploadpic = multer({ storage: storage });
// create profile
MemoryRouter.post('/createMemory', uploadpic.fields([{ name: 'memoryImges', maxCount: 20 }]), async (req, res) => {
    try {
        //gen new password
        const url = req.protocol + '://' + req.get('host')
        console.log(req.body, 'body')
        console.log(req.files, 'file')
        let multiFiles = req.files.memoryImges.map(res => {
            return res.path.slice(7)
        })
        console.log(multiFiles, 'multiFiles')
        let newUser = new Memory({
            originalUser: req.body.originalUser,
            file: multiFiles,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            likes: [],
            comments: {
                userId: req.body.originalUser,
                text: ''
            },

        });

        //save and response
        newUser.save().then(resp => {
            res.send(resp)
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


MemoryRouter.put('/updateMemory', async (req, res) => {
    try {
        profileModel.findOneAndUpdate({ _id: req.body._id },
            {
                $set: {
                    originalUser: req.body.originalUser,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    likes: [],
                    comments: {
                        userId: req.body.originalUser,
                        text: req.body.text
                    },
                },
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

MemoryRouter.put('/like/:id', async (req, res) => {
    try {
        const memory = await Memory.findById(req.params.id);
        if (!memory.likes.includes(req.body.userId)) {
            await memory.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json('The post has been liked');
        } else {
            await memory.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json('The post has been disliked');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = { MemoryRouter };