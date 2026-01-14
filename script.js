let apotelesma=document.getElementById("text")
let teleia=document.getElementById("teleia")
let istoriko=document.getElementById("istoriko")
let miden=document.getElementById("miden")
let ena=document.getElementById("ena")
let dio=document.getElementById("dio")
let tria=document.getElementById("tria")
let tessera=document.getElementById("tessera")
let pente=document.getElementById("pente")
let e3i=document.getElementById("e3i")
let efta=document.getElementById("efta")
let oxto=document.getElementById("oxto")
let ennia=document.getElementById("ennia")
let katharismos=document.getElementById("katharismos")
let antitheto=document.getElementById("antitheto")
let mod=document.getElementById("mod")
let div=document.getElementById("diairesi")
let pollaplasiasmos=document.getElementById("pollaplasiasmos")
let afairesi=document.getElementById("afairesi")
let prosthesi=document.getElementById("prosthesi")
let ison=document.getElementById("ison")
let proigoumenosArithmos=0
let deuterosArithmos=0
let apotelesmaTeliko = 0
let praxi=""

//Event για το katharismos
katharismos.addEventListener("click",function(){
    apotelesma.value=0
    praxi = ""

})
//Event για το antitheto
antitheto.addEventListener("click",function(){
    if(apotelesma.value==0){
        apotelesma.value=apotelesma.value
    }
    else{
        apotelesma.value = -parseFloat(apotelesma.value) 
    }
})

//Event για istoriko 
istoriko.addEventListener("click",function(){
    apotelesma.value=apotelesmaTeliko
})

function arithmos(noumero){
    if (noumero === "." && apotelesma.value.includes(".")) {
        return
    }
    if(apotelesma.value === "0") {
        apotelesma.value = noumero
    } 
    else {
        apotelesma.value += noumero
    }
}
function orisePraxi(simbol) {   
    if(praxi!==""){
        praxi=simbol
        apotelesma.value=""
    }
    else if(praxi==""){
        proigoumenosArithmos=parseFloat(apotelesma.value) 
        apotelesma.value = ""
        praxi = simbol                                                                        
    }                                                                          
    }
prosthesi.addEventListener("click", function() { orisePraxi("+") })
afairesi.addEventListener("click", function() { orisePraxi("-") })
pollaplasiasmos.addEventListener("click", function() { orisePraxi("*") })
div.addEventListener("click", function() { orisePraxi("/") })
mod.addEventListener("click", function() { orisePraxi("%")})
ison.addEventListener("click", function() {
    /*if ( proigoumenosArithmos.trim() === "" || isNan(proigoumenosArithmos)  || proigoumenosArithmos == "."){
        proigoumenosArithmos=0
    }*/
    if (apotelesma.value.trim() === "" || isNaN(parseFloat(apotelesma.value)) ||apotelesma.value == ".") {
        apotelesma.value = "0"
        
    }
    deuterosArithmos = parseFloat(apotelesma.value)
    apotelesmaTeliko = 0
    if(praxi==""){
        return
    }
    else if (praxi == "+") {
        apotelesmaTeliko = proigoumenosArithmos + deuterosArithmos
    } 
    else if (praxi == "-") {
        apotelesmaTeliko = proigoumenosArithmos - deuterosArithmos
    } 
    else if (praxi == "*") {
        apotelesmaTeliko = proigoumenosArithmos * deuterosArithmos
    } 
    else if (praxi == "/") {
        if (deuterosArithmos === 0) {
            apotelesma.value = "Error" 
            return;
        }
        apotelesmaTeliko = proigoumenosArithmos / deuterosArithmos
    } 
    else if (praxi == "%") {
        if (deuterosArithmos === 0) {
            apotelesma.value = "Error" 
            return;
        }
        apotelesmaTeliko = proigoumenosArithmos % deuterosArithmos
    }
    apotelesma.value = apotelesmaTeliko
    praxi=""
});
