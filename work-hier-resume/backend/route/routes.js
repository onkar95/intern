const bcrypt = require('bcryptjs')
const User = require('../module/UserStudent')
const { Router } = require('express');
const authController = require('../authControllers');
const router = Router();

router.post('/TutorRegister', authController.registerTutor)
router.post('/BecomeTutor', authController.BecomeTutor)
router.post('/StudentRegister', authController.registerStudent)
router.post('/Studentlogin', authController.loginStudent)
router.post('/Tutorlogin', authController.loginTeacher)
router.get('/verifyuser', authController.verifyuser)
router.get('/logout', authController.logout)
router.get('/Student', authController.Student)
router.get('/data', authController.data)

// router.post('/createBlog', authController.createBlog)
// router.get('/getBlog', authController.getBlog)
// router.delete('/delete/:id', authController.deleteBlog)
// router.put('/update/:id', authController.updateBlog)
module.exports = router;

