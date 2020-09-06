const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => res.send('Hello'));
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
        const user = new User({ email, password, name });
        user.save().then(() => res.json({ message: 'Saved successfully' }));
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error has occurred' });
    });
});
module.exports = router;