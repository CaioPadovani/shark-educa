const mongoose = require('mongoose')

const validateEmail = function (email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: [validateEmail, 'Por favor preencher com e-mail válido'],
    },
    phone: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', StudentSchema);