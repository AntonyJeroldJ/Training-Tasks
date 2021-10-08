let mongoose = require('mongoose');
let StudentSchema = {
    studentname: { type: String, required: true, },
    class: { type: String, required: true, },
    location: { type: String, required: true, },
    marks: { type: String, required: true },
    phone: { type: String, required: true, },
    rollno: { type: String, required: true, unique: true, },
    school_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'schools', index: true },

};

module.exports = { StudentSchema };
