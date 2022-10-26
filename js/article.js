let pres=document.getElementsByTagName("pre");
for(item of pres){
    console.log(item.classList)
    item.classList.add("line-numbers")
}
let articleUrl="../anime/img.json"
fetch(articleUrl).then((res)=>res.json()).then((res)=>{
    let rand=Math.floor( res.img.length*Math.random());
    let imgEle=document.querySelector("#rightAnime");
    imgEle.setAttribute("src","https://www.wexx.city/"+res.img[rand].img)
    let arr=document.querySelector("#arr");
    arr.setAttribute("href",res.img[rand].url)
    arr.innerHTML=res.img[rand].des;
})
