const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const users = [{name: 'Tony', email: 'tony@email.com' }]

app.get('/', (_, res) => {
    res.send('Your app');
});

app.get('/users', (_,res) => {
    res.json({ ok: true, users });
});

app.get('users/:name', (req, res) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name);
});

app.post ('/adduser', (req, res) => {
    const { name, email} = req.body;
    if (name && email) {
        users.push({name, email });
        res.json({ ok: true, users});
    }
});

app.listen(port, () => {
    console.log('server is running on port: ${port}');
});