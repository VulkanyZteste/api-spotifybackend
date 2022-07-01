const express = require('express');
const router = express.Router();

users = [{
    name: 'John',
    email: 'john@example.com'
}];

router.get('/api', (req, res) => {
    res.json({ users });
});


module.exports = router;