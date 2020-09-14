const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');

router.post('/signup', (req, res) => {
    const { name, email, password} = req.body;
    if(!name || !email || !password) {
        res.status(422);
        return res.json({ error: 'Insufficient info' });
    }
    User.findOne({ email: email }).then(savedUser => {
        if(savedUser) {
            return res.status(422).json({ error: 'User already exists' });
        }
        bcrypt.hash(password, 12).then(password => {
            const user = new User({ email, password, name });
            user.save().then(() => res.json({ message: 'Saved successfully' }));
        });
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error has occurred' });
    });
});

router.post('/signIn', (req, res) => {
    const { email, password} = req.body;
    if(!email || !password) {
        return res.status(422).json({ error: 'Please provide email and password' });
    }
    User.findOne({ email: email }).then(savedUser => {
        if(!savedUser) {
            return res.status(422).json({ error: 'Invalid email or password' });
        }
        bcrypt.compare(password, savedUser.password).then(doMatch => {
            if(doMatch) {
                const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                return res.json({ token });
            } else {
                return res.status(422).json({ error: 'Invalid email or password' });
            }
        }).catch(err => {
            console.error(err);
            return res.status(500).json('An error has occurred');
        });
    })
});

module.exports = router;
