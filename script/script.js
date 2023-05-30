const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munieco = document.getElementById("munieco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";

    munieco.classList.add("oculto");
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

    ingresoTexto.value = "";
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if (texto != "") {
        function encriptar(newText){
            for(let i = 0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newText
        };
        remplace(encriptar(texto));
    }
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if (texto != ""){
        function desencriptar(newText){
            for(let i = 0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            };
            return newText
        };
        remplace(desencriptar(texto));
    }
});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy')

    mensajeFinal.innerHTML = "";
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
 
    munieco.classList.remove("oculto");
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");

    ingresoTexto.focus();
});