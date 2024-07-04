const express = require('express')

const { handleGetAllUsers, handlePostUser, handleGetUserWithID, handleModifyUser, handleDeleteUser } = require('../controllers/users')

const router = express.Router()

// get all users and post a new user
router
    .route('/')
    .get(handleGetAllUsers)
    .post(handlePostUser)

// get user of specific id
router
    .route('/:id')
    .get(handleGetUserWithID)
    .patch(handleModifyUser)
    .delete(handleDeleteUser)

module.exports = router