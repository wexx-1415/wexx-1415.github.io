/*
 * @Author: your name
 * @Date: 2022-02-11 09:13:11
 * @LastEditTime: 2022-02-14 18:25:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \html练习\xlx\sheetjs-0.17.0\node\test.js
 */
// import mdList from './mdList.js';
const fs = require("fs");
const path = require("path");
var join = require("path").join;
var jsonFiles = [];
var mdListS = fs.readFileSync("./node/mdList.json", "utf-8");
var mdList = JSON.parse(mdListS);
// console.log(mdList.sites[0].path)

function isList(path) {
	// let flag=true
	for (let i = 0; i < mdList.sites.length; i++) {
		if (path == mdList.sites[i].path) {
			// flag=false
			// console.log(1)
			return true;
		}
	}
	return false;
}

function getJsonFiles(jsonPath) {
	function findJsonFile(path) {
		let files = fs.readdirSync(path);
		files.forEach(function (item, index) {
			let fPath = join(path, item);
			if (isList(item)) {
				return;
			}
			console.log(item);
			let stat = fs.statSync(fPath);
			if (stat.isDirectory() === true) {
				return;
			}
			if (stat.isFile() === true) {
				jsonFiles.push(fPath);
				mdList.sites.push(JSON.parse(`{"path":"${item}"}`));
			}
		});
	}
	findJsonFile(jsonPath);
	console.log(jsonFiles);
}
getJsonFiles("D:\\学习\\github.io\\mds");
const shell = require("C:\\Users\\18483\\AppData\\Roaming\\npm\\node_modules\\shelljs");

function read() {
	var datas = [];

	for (var i = 0; i < mdList.sites.length; i++) {
		let data = fs.readFileSync(
			"D:\\学习\\github.io\\mds\\" + mdList.sites[i].path,
			"utf-8"
		);
		var a = data.indexOf("---");
		var b = data.indexOf("---",a+1);
		data = `{"path": "${
			path.parse(mdList.sites[i].path, "utf8").name
		}",${data.slice(a + 6, b - 2)}`;
		console.log(data,a,b);
		if(!data.endsWith("}")){
			data+="}";
		}
		var testJson = eval("(" + data + ")");
		datas.push(testJson);
	}
	return datas;
}
var datas = read();
datas = `export default {
    "sites":${JSON.stringify(datas)}};`;
// console.log(mdList)
mdListS = JSON.stringify(mdList);
fs.writeFile("./node/testjson.js", datas, (err) => {
	console.error(err);
});

console.log(typeof jsonFiles[0]);
// shell.exec("gcc -v");
var i;
for (i = 0; i < jsonFiles.length; i++) {
	// console.log(jsonFiles[i])
	// }
	var markdown =
		require("C:\\Users\\18483\\AppData\\Roaming\\npm\\node_modules\\markdown").markdown;
	var data = fs.readFileSync(jsonFiles[i], "utf8");
	var parseUrl = path.parse(jsonFiles[i], "utf8");
	const name = parseUrl.name;
	const html = markdown.toHTML(data, "Maruku");
	const head = ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN'
                'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd' >
                    <html xmlns='http://www.w3.org/1999/xhtml'>

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>${name}</title>
            <link href="../css/app.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="../css/prism.css">
        </head>

        <body>
            <header id="header">
                <p>wexx's blog</p>
            </header>
            <div id="left" style="background-color: aquamarine;">
            </div>
            <article id="pp" style="margin-left: 200px;width:70%;background-color: aqua;">`;

	const tail = `</div><script src="../js/app.js"></script>
	<script src="../js/prism.js"></script></body></html>`;
	const htmlStr = head + html + tail;
	fs.writeFile(`D:/学习/github.io/htmls/${name}.html`, htmlStr, (err) => {});
}
fs.writeFile("./node/mdList.json", mdListS, (err) => {
	console.error(err);
});
