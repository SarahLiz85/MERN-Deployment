console.log("pets.models.js");

const mongoose = require("mongoose");

const PetsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be 3 characters or longer!"]
    },
    type: {
        type: String,
        required: [true, "Type is required!"],
        minlength: [3, "Type must be 3 characters or longer!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must be 3 characters or longer!"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    }

}, {timestamps: true});

module.exports = mongoose.model("Pets", PetsSchema);