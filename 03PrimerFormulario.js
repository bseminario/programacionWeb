var datos;
function obtenerDatos(){
    var name=document.getElementById("IDnombre");
    var comm=document.getElementById("IDcoment");
    var pass=document.getElementById("IDsecreto");
    var data=[name , comm , pass];
    return data;
}
datos=obtenerDatos();
