const mongoose = require("mongoose");
const {Schema} = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    }
});

export const categoryModel = mongoose.models.category || mongoose.model('category', schema);
