/*
 * @Author: your name
 * @Date: 2022-02-12 09:24:40
 * @LastEditTime: 2022-02-12 19:33:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \html练习\node\file.js
 */
const fs = require("fs");
var join = require("path").join;

function getJsonFiles(jsonPath) {
    let jsonFiles = [];

    function findJsonFile(path) {
        let files = fs.readdirSync(path);
        files.forEach(function(item, index) {
            let fPath = join(path, item);
            let stat = fs.statSync(fPath);
            if (stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) {
                jsonFiles.push(fPath);
            }
        });
    }
    findJsonFile(jsonPath);
    console.log(jsonFiles);
}

getJsonFiles("test");
const shell = require("C:\\Users\\18483\\AppData\\Roaming\\npm\\node_modules\\shelljs");
fs.readFile("D:/文档/---.md", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    var a = data.indexOf("---");
    var b = data.lastIndexOf("---");
    data = data.slice(a + 3, b - 2);
    testJson = eval("(" + data + ")");
    // window.testJson = testJson
    console.log(`${a}+${b}+${data}+${testJson.date}`);
});
shell.exec("gcc -v");
// testJson = window.testJson
// console.log(testJson)