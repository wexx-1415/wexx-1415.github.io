/*
 * @Author: your name
 * @Date: 2022-02-12 17:59:26
 * @LastEditTime: 2022-02-14 18:35:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \html练习\node\json.js
 */
import { func } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import data from "./testjson.js";
// console.log(data.sites[0])
let dis = document.getElementById("dis");
function article(pros) {
	return (
		<div className="container p-5 my-5 bg-primary text-white">
			<a href={pros.site}><h1>{pros.title}</h1></a>
			<p>{pros.descrp}</p>
		</div>
	);
}
function insertActle(title, descrp,site) {
	ReactDOM.render(article({ title: title, descrp: descrp,site:site }, dis));
}
for(let i=0;i<data.length;i++){
    insertActle(data[i].name,data[i].path,data[i].url);
}