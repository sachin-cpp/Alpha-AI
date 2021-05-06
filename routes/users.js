const express = require('express');
const router = express.Router;

const users = [{name: 'Tony', email: 'tony@email.com' }]

router.get('/', (_, res) => {
    res.send('Your app');
});

router.get('/users', (_,res) => {
    res.json({ ok: true, users });
});

router.get('users/:name', (req, res) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name);
});

router.post ('/adduser', (req, res) => {
    const { name, email} = req.body;
    if (name && email) {
        users.push({name, email });
        res.json({ ok: true, users});
    }
});

module.exports = router;