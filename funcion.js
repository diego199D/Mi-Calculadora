var cadena = "";
function agregar(valor){
    cadena = cadena + valor;
    document.getElementById("pantalla").value = cadena;
}

function calcular(){
    try{
        document.getElementById("pantalla").value = eval(cadena);
        cadena = eval(cadena);
    }catch(e){
        document.getElementById("pantalla") = "Error";
    }
}

function limpiar(){
    cadena = "";
    document.getElementById("pantalla").value = "";
}