const express = require('express');
const router = express.Router();

users = [{
    name: 'John',
    email: 'john@example.com'
},
{
    name: 'Leonardo',
    email: 'leonardoemanuel156@gmail.com'
}];

router.get('/login', (req, res) => {
    res.json({ users });
    console.log('Acessed to /login route');
});


module.exports = router;