const mongoose = require('mongoose');

const url = "mongodb+srv://nexusinfo:nexusinfo123@testclusterviraj.gqrz7wk.mongodb.net/NexusPhase2";
mongoose.connect(url);

const feedbackSchema = new mongoose.Schema({
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

const Feedback = mongoose.model('feedback', feedbackSchema);

module.exports = Feedback;