const { default: mongoose } = require('mongoose');
const User = require('../models/User')

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
module.exports.getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const users = await User.findById(id);
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
module.exports.createUser = (req, res) => {
    const body = req.body;
    console.log(body)
    try {
        const user = new User;
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.email = body.email;
        user.password = body.password;
        user.phone = body.phone;
        user.city = body.city;
        user.save()
        .then(user => {
            res.status(200).json(user)
        }).catch(error => {
            res.status(404).json({ message: error.message })
        });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
module.exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    if(!mongoose.Types.ObjectId(id)){
        res.status(404).json({ message: 'User id not found.' })
    }
    try {
        const user = User.findByIdAndUpdate(id).then(user => {
            user.firstName = body.firstName;
            user.lastName = body.lastName;
            user.email = body.email;
            user.password = body.password;
            user.phone = body.phone;
            user.city = body.city;
            user.save().then(user => {
                res.status(200).json(user)
            }).catch(error => {
                res.status(404).json({ message: error.message })
            });
        }).catch(error => {
            res.status(404).json({ message: error.message })
        });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
module.exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const users = await User.findByIdAndDelete(id);
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

