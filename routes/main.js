const express  = require('express')
const router = express.Router()
const {login,Dashboard}  = require('../controllers/main')
const authenticationMiddleware = require('../middleware/auth')



router.route('/login').post(login)
router.route('/Dashboard').get(authenticationMiddleware,Dashboard).post(Dashboard)


module.exports = router