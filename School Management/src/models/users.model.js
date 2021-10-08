let UserSchema = {
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: String, required: false, default: null, select: false },
    otp: { type: String, required: false, default: null, select: false }
};

module.exports = { UserSchema };
