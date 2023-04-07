const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/crud-redux', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);


app.post('/users/add', async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;

    const userData = new User({ email, name }) 

    try {
        await userData.save();
        res.send("user added successfully...")
    } catch (err) {
        console.log('adding new user failed' + err);
    }
});

app.put('/users/update/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (!user) {
            res.status(404).send('data is not found');
        } else {
            user.title = req.body.title;
            user.description = req.body.description;
            user.completed = req.body.completed;

            user.save().then(user => {
                res.json('User updated!');
            })
            .catch(err => {
                res.status(400).send('Update not possible');
            });
        }
    });
});

app.delete('/users/delete/:id', (req, res) => {
    User.findByIdAndRemove({_id: req.params.id}, (err, user) => {
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

app.get('/', (req, res) => {
    User.find((err, users) => {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
