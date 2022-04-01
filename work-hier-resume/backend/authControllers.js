const UserStudent = require('./module/UserStudent');
const UserTutor = require('./module/UserTutor');
const BecomeTutor = require('./module/BecomeTutor');
// const asyncHandler =require('express-async-handler')
const jwt = require('jsonwebtoken');
const maxAge = 5 * 24 * 60 * 60
const createJWT = id => {
    return jwt.sign({ id }, 'chatroom secret', {
        expiresIn: maxAge
    })
}
const alertError = (err) => {
    let errors = { name: '', email: '', password: '' }
    console.log('err message', err.message);
    console.log('err code', err.code);
    if (err.message === 'incorrect email') {
        errors.email = 'This email not found';
    }
    if (err.message === 'incorrect pwd') {
        errors.password = 'The password is incorrect';
    }
    if (err.code === 11000) {
        errors.email = 'This email already registered';
        return errors;
    }
    if (err.message.includes('user validation failed')) {

        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}
module.exports.registerTutor = async (req, res) => {
    const { Class, phoneNo, Age } = "null";
    const { name, email, password } = req.body;
    try {
        const user = await UserTutor.create({ name, email, password, Class, phoneNo, Age });
        const token = createJWT(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user });
    } catch (error) {
        let errors = alertError(error);
        res.status(400).json({ errors });
    }

}
module.exports.registerStudent = async (req, res) => {
    const { name, email, password, Class, phoneNo, Age } = req.body;
    try {
        const user = await UserStudent.create({ name, email, password, Class, phoneNo, Age });
        const token = createJWT(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user });
    } catch (error) {
        let errors = alertError(error);
        res.status(400).json({ errors });
    }

}
module.exports.BecomeTutor = async (req, res) => {
    const { name, email, Degree, Stream, Year, phoneNo } = req.body;
    try {
        const user = await BecomeTutor.create({ name, email, Degree, Stream, Year, phoneNo });
        const token = createJWT(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user });
    } catch (error) {
        let errors = alertError(error);
        res.status(400).json({ errors });
    }

}

module.exports.loginStudent = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserStudent.login(email, password);
        const token = createJWT(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user });
    } catch (error) {
        console.log(error)
        let errors = alertError(error);
        res.status(400).json({ errors });
    }
}

module.exports.loginTeacher = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserTutor.login(email, password);
        const token = createJWT(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user });
    } catch (error) {
        console.log(error)
        let errors = alertError(error);
        res.status(400).json({ errors });
    }
}
module.exports.verifyuser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'chatroom secret', async (err, decodedToken) => {
            console.log('decoded token', decodedToken)
            if (err) {
                console.log(err.message)
            } else {
                let userStudent = await UserStudent.findById(decodedToken.id)
                let userTutor = await UserTutor.findById(decodedToken.id)
                if (userStudent) {
                    res.json(userStudent);
                    next();

                } else {
                    res.json(userTutor);
                    next();
                }
                next();

            }
        })
    } else {
        next();
    }
}
module.exports.logout = (req, res) => {
    res.cookie('jwt', "", { maxAge: 1 })
    res.status(200).json({ logout: true })
}

module.exports.createBlog = (req, res, next) => {

    const newBlog = new Blog(
        {
            title: req.body.title,
            content: req.body.content,
        }
    )
    newBlog.save()
        .then(data => res.json(data))
        .catch(err => console.log(err))

}
module.exports.data = (req, res, next) => {

    UserStudent.find()
        .then((data) => {
            res.json(data)
        })
        .catch(err => console.log(err))
}
module.exports.Student = async (req, res) => {
    const { email, password } = req.body;

    UserStudent.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
        .catch(err => console.log(err))
    // res.status(201).json({ UserStudent });

}

// module.exports.deleteBlog = (req, res) => {
//     const id = req.params.id;
//     Blog.findByIdAndDelete({ _id: id }, (req, res, err) => {
//         if (!err) {
//             console.log("deleted");
//         } else {
//             console.log(err);
//         }
//     })
// }
// module.exports.updateBlog = (req, res) => {

//     const updatedItem = {
//         title: req.body.title,
//         content: req.body.content,
//       };
//     Blog.findByIdAndUpdate(
//         { _id: req.params.id },
//         { $set: updatedItem },
//         (req, res, err) => {
//             if (!err) {
//                 console.log("updated");
//             } else {
//                 console.log(err);
//             }
//         })
// }