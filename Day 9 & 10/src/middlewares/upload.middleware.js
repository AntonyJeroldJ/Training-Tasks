const multer = require('multer')
const path = require('path')

// File storage path
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
        console.log(time)
        var dateTime = date + time
        var val = (Math.floor(1000 + Math.random() * 9000)) + dateTime + ' ';
        console.log(val)
        cb(null, 'upload ' + val + file.originalname);

    }
});
var upload = multer({ storage: storage }).any('file');

module.exports = { upload }
