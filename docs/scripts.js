var vecC = document.querySelectorAll("p");
var WOCAO = document.getElementById("wocao");
var WOCAO2 = document.getElementById("wocao2");
var WOCAO3 = document.getElementById("wocao3");

window.onload = vecA;



function vecA(){
setInterval(yiyiyitest,500);
}
function vecB(fuzhu, fuzhu2){
    min = Math.ceil(fuzhu);
    max = Math.floor(fuzhu2);
    return Math.floor(Math.random() * (max - min)) + min;
}
// function cqsber(){
    // var 疮穷=document.createElement("p");
	// var 传奇公文本=document.createTextNode("疮穷啥b");
	// 疮穷.appendChild(传奇公文本);
	// document.body.appendChild(疮穷);}

function yiyiyitest(){
    vecC.forEach(function (element){
        var number = vecB(0,255);
        var number2 = vecB(0,255);
        var number3 = vecB(0,255);
        var rgb = "rgb(" + number + "," + number2 + "," + number3 + ")";
        element.style.color = rgb;})
}

function sfgid(){
    if(WOCAO2.value !== "" && WOCAO3.value !== ""){
    WOCAO2.value = "ASDF";
    WOCAO.value = vecB(100000000000000000,999999999999999999);
}
}