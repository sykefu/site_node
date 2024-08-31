const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const SujetBacPratiqueSchema = mongoose.Schema({
    pdf_path: { type: String, required: true, unique: true},
    python_path: { type: String, required: true, unique: true},
    desc_ex1: { type: String, required: true},
    tag_ex1: { type: String, required: true},
    done: {type: Boolean, default: false},
    infos: {type: [String], required: true},
    year: {type: Number, required: true}

});

module.exports = mongoose.model('SujetBacPratique', SujetBacPratiqueSchema);