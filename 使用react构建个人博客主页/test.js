let fs=require("fs")
const  md  = require('marked');
let data=fs.readFileSync("使用react构建个人博客主页.md","utf-8")
const html=md.parse(data,"Maruku")
console.log(html)
const head=`<html>
<head>
    <title>
    </title>
</head>
<body>
<div class="contente">
<div class="main">
`
const tail=`</div><div class="right"><div class="imgArr">
<img id="rightAnime" src=''></img>
<br></br>
<a id="arr" href='' target="_blank">
''
</a></div>
</div></div>
<div class="footer"><a href="https://beian.miit.gov.cn/" id="icp">蜀ICP备2022017690号-1</a></div>
</body>
<script  src='../js/article.js'></script>
<link rel="stylesheet" type="text/css" href="../css/article.css">
    <link rel="stylesheet" type="text/css" href="../css/prism.css">
    <script  src='../js/prism.js'></script>
</html>`
fs.writeFile("./parsed.html",head+html+tail,(erroe)=>{
    console.log(erroe)
})