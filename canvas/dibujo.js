
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas=30;
var l= 0;
var yi,xf;
var colorcito = "#AFA";

for ( l= 0; l < lineas; l++)

{
  yi = 10 +l;
  xf=  10 * (l+ 1);
  dibujarLinea(colorcito, 0,yi, xf,300);
  console.log("lineas" + l);
}
dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 1,299,299,299);



function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
 lienzo.beginPath();
 lienzo.strokeStyle= color;
 lienzo.moveTo(x_inicial, y_inicial);
 lienzo.lineTo(x_final, y_final);
 lienzo.stroke();
 lienzo.closePath();
}
