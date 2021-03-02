
//Conversor Bin2Dec 

var botaoBin1 = document.querySelector("#btnBin1");
var botaoBin0 = document.querySelector("#btnBin0");

botaoBin1.onclick = function () {
    document.querySelector("#displayBin").value = document.querySelector("#displayBin").value + botaoBin1.value
}

botaoBin0.onclick = function () {
    document.querySelector("#displayBin").value = document.querySelector("#displayBin").value + botaoBin0.value
}

var botaoConvBin = document.querySelector("#btnConverterBin");
botaoConvBin.onclick = function () {
    document.querySelector("#displayBin").value = parseInt(document.querySelector("#displayBin").value, 2);
}

var botaoRefreshBin = document.querySelector("#btnRefreshBin");
botaoRefreshBin.onclick = function () {

    document.querySelector("#displayBin").value = " ";
}


//Conversor Dec2Bin

var botaoDec0 = document.querySelector('#btnDec0');
var botaoDec1 = document.querySelector('#btnDec1');
var botaoDec2 = document.querySelector('#btnDec2');
var botaoDec3 = document.querySelector('#btnDec3');
var botaoDec4 = document.querySelector('#btnDec4');
var botaoDec5 = document.querySelector('#btnDec5');
var botaoDec6 = document.querySelector('#btnDec6');
var botaoDec7 = document.querySelector('#btnDec7');
var botaoDec8 = document.querySelector('#btnDec8');
var botaoDec9 = document.querySelector('#btnDec9');

botaoDec1.onclick = function () {
    document.querySelector("#displayDec").value = document.querySelector("#displayDec").value + botaoDec1.value
}
botaoDec2.onclick = function () {
    document.querySelector("#displayDec").value = document.querySelector("#displayDec").value + botaoDec2.value
}
botaoDec3.onclick = function () {
    document.querySelector("#displayDec").value = document.querySelector("#displayDec").value + botaoDec3.value
}
botaoDec4.onclick = function () {
    document.querySelector("#displayDec").value = document.querySelector("#displayDec").value + botaoDec4.value
}
botaoDec5.onclick = function () {
    document.querySelector("#displayDec").value = document.querySelector("#displayDec").value + botaoDec5.value
}
botaoDec6.onclick = function () {
    document.querySelector("#displayDec").value = document.querySelector("#displayDec").value + botaoDec6.value
}
botaoDec7.onclick = function () {
    document.querySelector("#displayDec").value = document.querySelector("#displayDec").value + botaoDec7.value
}
botaoDec8.onclick = function () {
    document.querySelector("#displayDec").value = document.querySelector("#displayDec").value + botaoDec8.value
}
botaoDec9.onclick = function () {
    document.querySelector("#displayDec").value = document.querySelector("#displayDec").value + botaoDec9.value
}
botaoDec0.onclick = function () {
    document.querySelector("#displayDec").value = document.querySelector("#displayDec").value + botaoDec0.value
}


var botaoConvDec = document.querySelector("#btnConverterDec");
botaoConvDec.onclick = function () {
    document.querySelector("#displayDec").value = parseInt(document.querySelector("#displayDec").value, 10).toString(2);
}

var botaoRefreshDec = document.querySelector("#btnRefreshDec");
botaoRefreshDec.onclick = function () {

    document.querySelector("#displayDec").value = " ";
}

