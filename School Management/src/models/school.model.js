let SchoolSchema = {
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    phone: { type: String, required: true, unique: true },

};

module.exports = { SchoolSchema };
