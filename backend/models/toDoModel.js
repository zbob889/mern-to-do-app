const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    }
}, { timestamps: true });

module.exports = mongoose.model('ToDo', toDoSchema);