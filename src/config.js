const mongoose = require('mongoose');

//nexusinfo, nexusinfo123
const url = "mongodb+srv://nexusinfo:nexusinfo123@testclusterviraj.gqrz7wk.mongodb.net/NexusPhase2";
// const url = "mongodb://localhost:27017/techysoftware"
// mongodb+srv://<username>:<password>@testclusterviraj.gqrz7wk.mongodb.net/

mongoose.connect(url);

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    text: {
        type: String,
    },
});

const Login = mongoose.model('users', loginSchema);

module.exports = Login;