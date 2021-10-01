module.exports = (app) => {
    const value = require("../controllers/upload.controller");
    let { upload } = require("../middlewares/upload.middleware")


    app.post("/api/upload", upload, value.uploadImage);
    // app.get("/api/upload", upload, value.getImage);

}