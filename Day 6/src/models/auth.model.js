let authSchema = {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true, }

};
console.log("auth_model_1")
module.exports = { authSchema };