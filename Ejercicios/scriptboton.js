/*
+Cada que se le clique al cuadro:
-Cambiar de rojo a azul
-Agregar dentro del cuadro el nombre del color anterior
*/
var squareEjercicio = document.getElementById("square-test");
var squareEjercicio2 = document.getElementById("square-log");
var boton = document.getElementById("boton");
console.log(squareEjercicio);



squareEjercicio.addEventListener("click", function(evento){
   // console.log(evento);
   // console.log(evento.target.style);
 
    if (evento.target.style.backgroundColor === "red"){
            evento.target.style.backgroundColor = "blue";
     }
     else {
         evento.target.style.backgroundColor = "red";
    }
    console.log(evento.target.style.backgroundColor);


    const span = document.createElement ("span");
    span.innerText = evento.target.style.backgroundColor;
   squareEjercicio2.appendChild(span);
    console.log(span);
     });


   
     
boton.addEventListener("click", function(borrar){
  squareEjercicio.style.backgroundColor ="white";  
    squareEjercicio2.innerHTML = "";
});


     