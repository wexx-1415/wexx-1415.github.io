/*
 * @Author: your name
 * @Date: 2022-02-12 17:59:26
 * @LastEditTime: 2022-02-14 18:35:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \html练习\node\json.js
 */
import data from './testjson.js';
console.log(data.sites[0])
var dis = document.getElementById("dis")

function insert(path, href, imgUrl, title, num) {
    var div = document.createElement("div")
    div.className = "disDiv"
    dis.appendChild(div)
    var divs = document.getElementsByClassName("disDiv")
    var img = document.createElement("img")
    var p = document.createElement("p")
    var a = document.createElement("a")
    img.src = imgUrl
    p.innerHTML = title
    a.href = "../htmls/" + path + ".html"
    a.innerHTML = "查看文档"
    divs[num].appendChild(img)
    divs[num].appendChild(p)
    divs[num].appendChild(a)
    var a2 = document.createElement("a")
    a2.href = href
    a2.innerHTML = "立即打开"
    divs[num].appendChild(a2)
}
for (var i = 0; i < data.sites.length; i++) {
    insert(data.sites[i].path, data.sites[i].url, data.sites[i].img, data.sites[i].name, i)
}