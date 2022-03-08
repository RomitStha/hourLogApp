const express = require('express')
const router = express.Router()

const { getAdmin, getAllAdmins, createAdmin, getAllUsers, getUser, createUsers}  = require ('../controller/hourLogController')

router.route('/create-user').post(createUsers)
router.route('/create-admin').post(createAdmin)
router.route('/get-user/:id').get(getUser)
router.route('/getall-users').get(getAllUsers)
router.route('/get-admin/:id').get(getAdmin)
router.route('/getall-admins').get(getAllAdmins)

module.exports = router