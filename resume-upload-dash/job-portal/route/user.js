const router = require('express').Router()

const auth = require('../middleware/auth');

router.post('/signup', auth.signup)
router.post('/login', auth.login)
router.get('/logout', auth.logout)
router.get('/verifyuser', auth.verifyuser)

module.exports = router