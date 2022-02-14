var reg=/^([a-zA-Z])+(l|L)$/;
var playli1=$("#se").val();
	var comp=localStorage.getItem("comp");
$(document).ready(function() {
	$('#se').append(comp);
    $(".key").click(function() {
        var a = $(this).text().slice(1);
        var b = "mus/" + a + ".mp3";
        bac(this);
        play(b);
    });
	$("#start").click(function(){
		if($(this).text()=="开始"){
			$(this).text("暂停");
			$(this).attr("onclick","clearInterval(mucs);");
		}else if($(this).text()=="暂停"){
			$(this).text("继续");
			$(this).attr("onclick","pla();");
			}else{
				$(this).text("暂停");
				$(this).attr("onclick","clearInterval(mucs);");
			};
	});
	
	$("#compose").click(function(){
		$("form").fadeToggle("fast");
		if($(this).text()=="编曲"){
			$(this).text("收起");
			
		}else{
			$(this).text("编曲");
			
			};
	});
});
	function upld(){
		tesst=reg.test($('#list').val());
		if(tesst){
	    	var op="<option value=\""+$('#list').val()+"\">"+$('#plna').val()+"</option>";
			comp=comp+op;
			localStorage.setItem("comp",comp);
			$('#se').append(op);
				}
				else{
				alert("请按要求谱曲~")
				};
	};
	
function bac(div) {
	
    div.style.boxShadow = "2px 0px 5px #8556C4,-2px 0px 5px #8556C4,0px 2px 5px #8556C4,0px -2px 5px #8556C4 ";
    div.style.fontSize = "20px";
	setTimeout(function() {
		div.style.boxShadow = "none";
		div.style.fontSize = "16px";		
    },
    200);
	var topp=div.getBoundingClientRect().top+document.documentElement.scrollTop;
	var leff=div.getBoundingClientRect().left+document.documentElement.scrollLeft;
	
	var eff="<div class='dyc'"+" style=\'"+"top:"+topp+"px;left:"+leff+"px\';"+"></div>";
	$("body").append(eff);
	setTimeout(function(){
		$(".dyc").remove();
	},200);

}
function play(url) {
    audio1 = document.getElementById("audio1");
    audio1.src = url;
    audio1.play()
}
	document.onkeydown = function(e) {
    e = e || window.event;
    var keycode = e.keyCode || e.which;
    if($("#plna")!=document.activeElement){
		keyc(keycode);
		};
    
}
function keyc(keycode){
	var arrDiv = document.querySelectorAll('.key');
	switch (keycode) {
	case 87:
	    bac(arrDiv[0]);
	    play('mus/1.mp3');
	    break;
	case 69:
	    bac(arrDiv[1]);
	    play('mus/2.mp3');
	    break;
	case 82:
	    bac(arrDiv[2]);
	    play('mus/3.mp3');
	    break;
	case 84:
	    bac(arrDiv[3]);
	    play('mus/4.mp3');
	    break;
	case 89:
	    bac(arrDiv[4]);
	    play('mus/5.mp3');
	    break;
	case 85:
	    bac(arrDiv[5]);
	    play('mus/6.mp3');
	    break;
	case 73:
	    bac(arrDiv[6]);
	    play('mus/7.mp3');
	    break;
	case 79:
	    bac(arrDiv[7]);
	    play('mus/1-1.mp3');
	    break;
	case 83:
	    bac(arrDiv[8]);
	    play('mus/3-1.mp3');
	    break;
	case 68:
	    bac(arrDiv[9]);
	    play('mus/3-2.mp3');
	    break;
	case 70:
	    bac(arrDiv[10]);
	    play('mus/3-3.mp3');
	    break;
	case 71:
	    bac(arrDiv[11]);
	    play('mus/3-4.mp3');
	    break;
	case 72:
	    bac(arrDiv[12]);
	    play('mus/3-5.mp3');
	    break;
	case 74:
	    bac(arrDiv[13]);
	    play('mus/3-6.mp3');
	    break;
	case 75:
	    bac(arrDiv[14]);
	    play('mus/3-7.mp3');
	    break;
	case 90:
	    bac(arrDiv[15]);
	    play('mus/5-1.mp3');
	    break;
	case 88:
	    bac(arrDiv[16]);
	    play('mus/5-2.mp3');
	    break;
	case 67:
	    bac(arrDiv[17]);
	    play('mus/5-3.mp3');
	    break;
	case 86:
	    bac(arrDiv[18]);
	    play('mus/5-4.mp3');
	    break;
	case 66:
	    bac(arrDiv[19]);
	    play('mus/5-5.mp3');
	    break;
	case 78:
	    bac(arrDiv[20]);
	    play('mus/5-6.mp3');
	    break;
	case 77:
	    bac(arrDiv[21]);
	    play('mus/5-7.mp3');
	    break;
	
	}
}
var i=0;
var a=500;

function pla(){
	var arrDiv = document.querySelectorAll('.key');
	
	mucs=setInterval("var pt=document.getElementById('se').value.toUpperCase().charCodeAt(i);i++;if(pt==76){clearInterval(mucs);i=0;$('#start').text('开始')}keyc(pt);",a);
	window.mucs=mucs;
	
}
