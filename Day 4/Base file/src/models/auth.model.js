let authSchema = {
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false }
};
console.log("auth_model_1")
module.exports = { authSchema };