const commonApi = require("../helpers/commonApi");
exports.uploadImage = async (req, res) => {
    const filePath = "public/uploads/" + req.files[0].originalname;
    console.log(filePath)
    return res.status('200').send({ results: filePath, message: "File Uploaded successfully" })
}