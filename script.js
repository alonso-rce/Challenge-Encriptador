const ingreso=document.querySelector("#ingreso");
const salida=document.querySelector("#texto_salida");
const botonCopiar=document.querySelector("#copiar");
const botonEncriptar=document.querySelector("#encriptador");
const botonDesencriptar=document.querySelector("#desencriptador");
const botonLimpiar=document.querySelector("#limpiador");
const imgMuneco=document.querySelector(".img_persona");
const mnsjNE=document.querySelector(".mensaje_respuesta");
const slide=document.querySelector(".slider");
const body=document.querySelector("body");

function encriptar() {
    imgMuneco.style.display="none";
    mnsjNE.style.display="none";
    salida.style.display="block";
    botonCopiar.style.display="block";
    let textoEncriptado=encriptacion(ingreso.value.toLowerCase());
    salida.value=textoEncriptado;
}

function desencriptar() {
    imgMuneco.style.display="none";
    mnsjNE.style.display="none";
    salida.style.display="block";
    botonCopiar.style.display="block";
    let textoDesencriptado=desencriptacion(ingreso.value.toLowerCase());
    salida.value=textoDesencriptado;
}

function limpiar() {
    mnsjNE.style.display="block";
    salida.style.display="none";
    botonCopiar.style.display="none";
    ingreso.value="";
    if (window.innerWidth > 768){
        imgMuneco.style.display="block";
    }
    else{
        imgMuneco.style.display="none";
    }
}

function copiar () {
    navigator.clipboard.writeText(salida.value);
}

function encriptacion(texto){
    const matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(let i=0;i<matriz.length;i++){
        if(texto.includes(matriz[i][0])){
            texto=texto.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return texto;
}

function desencriptacion(texto){
    const matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(let i=0;i<matriz.length;i++){
        if(texto.includes(matriz[i][1])){
            texto=texto.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    return texto;
}

slide.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})