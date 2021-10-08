let mongoose = require('mongoose');
let ClassSchema = {
    class: { type: String, required: true },
    schoolname: { type: String, required: true, unique: false },
    school_id: { type: String, required: true },
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'teachers', index: true, default: null }
};
module.exports = { ClassSchema };