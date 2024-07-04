const User = require('../models/users')

// get all users
async function handleGetAllUsers(req, res) {
    const users = await User.find({})
    return res.json(users)
}

// post a user
async function handlePostUser(req, res) {
    const body = req.body   
    
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
        return res.status(400)

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })

    console.log(result)

    return res.status(201).json({ msg: 'success' })
}

// handle a user id
async function handleGetUserWithID(req, res) {
    const user = await User.findById(req.params.id)

    if(user) return res.status(200).json(user)
    return res.status(404).json({ msg: 'User not found!' })
}

// modify user
async function handleModifyUser(req, res) {
    await User.findByIdAndUpdate(req.params.id, req.query)
    return res.status(200).json({ msg: 'success' })
}

async function handleDeleteUser(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({ msg: 'success' })
}

module.exports = {
    handleGetAllUsers,
    handlePostUser,
    handleGetUserWithID,
    handleModifyUser,
    handleDeleteUser
}