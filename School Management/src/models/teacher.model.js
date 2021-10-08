let mongoose = require('mongoose');
let TeacherSchema = {
    teachername: { type: String, required: true, },
    class: { type: String, required: true, unique: true },
    location: { type: String, required: true, },
    qualification: { type: String, required: true },
    specialist: { type: String, required: true, },
    phone: { type: String, required: true, },
    school_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'schools', index: true },
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'class', index: true, default: null },
};

module.exports = { TeacherSchema };