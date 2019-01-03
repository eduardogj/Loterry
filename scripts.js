var arr = [];

while(arr.length < 15) {

var r = Math.floor(Math.random()*25) + 1;

    if(arr.indexOf(r) === -1) arr.push(r);

    arr.sort(function(a, b) {return a-b;});
}

document.querySelector("#num1").textContent = arr[0];
document.querySelector("#num2").textContent = arr[1];
document.querySelector("#num3").textContent = arr[2];
document.querySelector("#num4").textContent = arr[3];
document.querySelector("#num5").textContent = arr[4];
document.querySelector("#num6").textContent = arr[5];
document.querySelector("#num7").textContent = arr[6];
document.querySelector("#num8").textContent = arr[7];
document.querySelector("#num9").textContent = arr[8];
document.querySelector("#num10").textContent = arr[9];
document.querySelector("#num11").textContent = arr[10];
document.querySelector("#num12").textContent = arr[11];
document.querySelector("#num13").textContent = arr[12];
document.querySelector("#num14").textContent = arr[13];
document.querySelector("#num15").textContent = arr[14];


var today = new Date();
document.getElementById('dtText').innerHTML=today;
