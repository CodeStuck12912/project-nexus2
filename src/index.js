const express = require('express');

const collection = require('./config');
// const collection2 = require('./config2');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));  // Parse application/x-www-form-urlencoded
app.use(bodyParser.json());  // Parse application/json


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/info', async (req, res) => {
    const data = {
        name: req.body.uname,
        email: req.body.email,
        text: req.body.text,
    }
    const userData = await collection.insertMany(data);
    console.log(userData);
    res.render('home');
});

// app.post('/feed', async (req, res) => {
//     const udata = {
//         name: req.body.feedName,
//         email: req.body.feedEmail,
//         text: req.body.feedText,
//     }
//     const fuserData = await collection2.insertMany(udata);
//     console.log(fuserData);
//     res.render('home');
// });

// app.post('/login', async (req, res) => {
//     const user = await collection.findOne({ name: req.body.name, password: req.body.password });
//     if (user) {
//         res.render('home');
//     } else {
//         res.render("wrong");
//     }
// });

const PORT = 0.0.0.0;
app.listen(PORT, () => {
    console.log("Server Started! on port:", PORT, 'Network connection Slow!!');
});
