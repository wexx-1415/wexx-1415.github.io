/*
 * @Author: your name
 * @Date: 2022-02-11 10:31:18
 * @LastEditTime: 2022-02-12 08:52:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \html练习\node\app.js
 */
var header1 = document.getElementsByTagName("h1");
// console.log(header1);
var left = document.getElementById("left");
var p = document.createElement("p")
p.innerHTML = "目录"
left.appendChild(p);
for (var i = 0; i < header1.length; i++) {
    // console.log(header1[i]);
    header1[i].id = i;
    // header1[i].style.backgroundColor = "aquamarine";
    var label = document.createElement("a");
    label.href = "#" + i;
    label.innerHTML = header1[i].innerHTML;
    left.appendChild(label);
    var br = document.createElement("br");
    left.appendChild(br);
}