
//Conversor Bin2Dec 

var botaoBin1 = document.querySelector("#btnBin1");
var botaoBin0 = document.querySelector("#btnBin0");
var displayBin = document.querySelector("#displayBin");
var botaoConvBin = document.querySelector("#btnConverterBin");
var botaoRefreshBin = document.querySelector("#btnRefreshBin");

botaoBin1.addEventListener("click", changeDisplayBin)
botaoBin0.addEventListener("click", changeDisplayBin)
function changeDisplayBin() {
    displayBin.value = displayBin.value + this.value
}

botaoConvBin.addEventListener("click",convertDisplayBin)
function convertDisplayBin() {
    displayBin.value = parseInt(displayBin.value, 2);
}

botaoRefreshBin.addEventListener("click",refreshDisplayBin)
function refreshDisplayBin(){
    displayBin.value = " ";
}


//Conversor Dec2Bin

var displayDec = document.querySelector("#displayDec");
var botoesDec = document.querySelectorAll('.btnDec');
var botaoConvDec = document.querySelector("#btnConverterDec");
var botaoRefreshDec = document.querySelector("#btnRefreshDec");

for (let idx = 0; idx < botoesDec.length; idx++) {
    botoesDec[idx].addEventListener("click", changeDisplayDec)
}
function changeDisplayDec(){
    displayDec.value = displayDec.value + this.value
}

botaoConvDec.addEventListener("click",convertDisplayDec)
function convertDisplayDec(){
    displayDec.value = parseInt(displayDec.value, 10).toString(2);
}

botaoRefreshDec.addEventListener ("click", refreshDisplayDec )
function refreshDisplayDec(){
    displayDec.value = " ";
}

