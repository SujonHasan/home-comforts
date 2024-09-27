const mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false
    }
})

userSchema.pre("save", async function (next) {
    const user = this;
    console.log("password bcrypt");
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

userSchema.methods.isPasswordMatch = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
};

export const userModel = mongoose.models.user || mongoose.model('user', userSchema);
