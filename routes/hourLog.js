const express = require('express')
const router = express.Router()

const { getAdmin, getAllAdmins, createAdmin, getAllUsers, getUser, createUsers,updateUser, updateAdmin, deleteUser, deleteAdmin}  = require ('../controller/hourLogController')

router.route('/create-user').post(createUsers)
router.route('/create-admin').post(createAdmin)
router.route('/get-user/:id').get(getUser)
router.route('/getall-users').get(getAllUsers)
router.route('/get-admin/:id').get(getAdmin)
router.route('/getall-admins').get(getAllAdmins)
router.route('/update-admin/:id').put(updateAdmin)
router.route('/update-user/:id').put(updateUser)
router.route('/delete-user/:id').put(deleteUser)
router.route('/delete-admin/:id').put(deleteAdmin)



module.exports = router