const xlsx = require('xlsx');
const db = require("../models/index.model");
const commonApi = require("../helpers/commonApi");
var controller = "sheet";

//Sheet Reading Copntroller
exports.sheet = function (req, res) {
    const query = {};
    query.filter = req.query;
    query.body = req.body;
    const filePath = query.body['file']
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    let posts = [];
    let post = {};

    for (let cell in worksheet) {
        const cellAsString = cell.toString();

        if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
            if (cellAsString[0] === 'A') {
                post.id = worksheet[cell].v;
            }
            if (cellAsString[0] === 'B') {
                post.name = worksheet[cell].v;
            }
            if (cellAsString[0] === 'C') {
                post.email = worksheet[cell].v;
                posts.push(post);
                post = {};
            }
        }
    }

    query.result = posts
    query.message = 'success'
    if (!posts) {
        console.log(error);
        commonApi.responseOnly(res, query.message, query.result, controller);
    } else {
        commonApi.responseOnly(res, query.message, query, controller);
    }

}