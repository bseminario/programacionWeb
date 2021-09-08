//alert("kjkkjk");
var numeros=document.getElementById("numeros");
numeros.innerHTML="123 456 789";

var variableJS="variable de Javascript insertada desde el script";
var insertJS=document.getElementById("insertJS");
insertJS.innerHTML=`
<h1>Insertando con JS</h1>
<h2>Soy una ${variableJS}</h2>`
;
document.getElementById("uniones").innerHTML +="x "+ `<h1>adjunto este texto</h1>`;
 6 
function alpha(elemento) {
    document.getElementById("funciones").innerHTML=
    `<h3>${elemento}</h3>`
    ;
}
var e="sodio";
alpha(e);
var x=['array1','array2','array3'];
var y=['arraya','arrayb','arrayc'];
document.write("El numero de elementos del arreglo es: "+x.length);
x.forEach(function (arreglo){
    document.write(arreglo+'<br/>');
});

y.forEach(dato=>document.write(dato+'<br/>'));
//OBJETOS en JavaScript
let objetoJugador={
    "username": 'Hiro',
    "hours": 12,
    "jugador": true
};

 const PI=3.1416;
 let i=0;
 while(i<50)
 {
     i++;
     document.write(i+"|");
     ++i;
 }
 