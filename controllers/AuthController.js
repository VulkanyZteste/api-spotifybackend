const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');


const register = (req, res, next) => {

    if (!req.body.email) {
        res.status(406).json({ message: 'Email field is empty' });
    };


    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if (err) {
            res.json({ error: err })
        }


        let user = new User({
            email: req.body.email,
            password: hashedPass,
            profileName: req.body.profileName,
            dayBirth: req.body.dayBirth,
            monthBirth: req.body.monthBirth,
            yearBirth: req.body.yearBirth,
            gender: req.body.gender,
            terms: req.body.terms
        });

        user.save()
            .then(user => {
                console.log('Succesfully registered!');
                console.log();
                console.log();
                console.log(`User: ${user.profileName}`);
                console.log(user);
                res.status(201).json({ message: 'Succesfully registered!' });
            })
            .catch(error => {
                res.json({ message: 'An error ocurred!' });
            });
    })


}

const login = (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    if (!email) {
        res.send('empty field')
        return;
    }

    if (!password) {
        res.send('empty field')
        return;
    }

    User.findOne({ $or: [{ email: email }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.json({ error: err });
                    }
                    if (result) {
                        console.log('Logged');
                        res.send('succesfully logged');
                        // res.redirect('/profile');
                    } else {
                        // res.json({ message: 'Password is wrong!' });
                        res.send('password is wrong');
                        console.log('Password is wrong!');
                    }
                });
            } else {
                // res.status(403).json({ message: 'No user found' });
                console.log('No user found');
                res.send('no user found');
            };


        });



}

module.exports = {
    register, login
}