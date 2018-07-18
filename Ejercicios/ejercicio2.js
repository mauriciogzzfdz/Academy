// console.log("Hola mundo");
// console.log(document.getElementById("square-test"));
// let valor1 = 2;
// let valor2 = 3;
// let sumaValores = valor1 + valor2;

// document.getElementById("square-test").addEventListener("click", function(){
// alert("Gracias por tocarme");
// document.getElementById("square-test").setAttribute("class","blue-background")
// alert(sumaValores);
// });

// document.getElementById("square-test").setAttribute("class", "red-background");

// console.log(sumaValores);

// const nombre = "Mau"
// const texto1= `Hola ${nombre}`;
// const texto2 = " Mundo";

// console.log(texto1,texto2);
// console.log(texto1 + texto2);
// // console.log(saludo);

// let noDefinido;
// let nulo = null;

// console.log(noDefinido, nulo);
 

// let carro = {
// color: "rojo",
// dobleTraccion: false,
// puertas: 4
// }

// console.log(carro, carro.color);

// const carro0 = {
//     color: "rojo",
//     dobleTraccion: false,
//     puertas: 4
// }

// const carro1 = {
//     color: "blanco",
//     dobleTraccion: false,
//     puertas: 2
// }
// const carro2 = {
//     color: "azul",
//     dobleTraccion: true,
//     puertas: 4
// }
// const carro3 = {
//     color: "negro",
//     dobleTraccion: false,
//     puertas: 4
// }
// const carro4 = {
//     color: "verde",
//     dobleTraccion: true,
//     puertas: 2
// }

// const carro5 = {
//     color: "rojo",
//     dobleTraccion: true,
//     puertas: 4
// }



//     // console.log(carro0,carro1, carro2);

//     const carros = [carro0, carro1,carro2,carro3,carro4];
//     // console.log(carros[2]);
    
//     // console.log(carros.length);
//     // console.dir(carros);

//     // carros.push(carro5);
//     // console.log(carros.length);

//     // // console.log(carros[0]);
//     // // console.log(carros[1]);
//     // // console.log(carros[2]);
//     // // console.log(carros[3]);
//     // // console.log(carros[4]);
//     // // console.log(carros[5]);

//     // for(let i = 0; i < carros.length; i++){
//     //     console.log(carros[i
//     //     ])
//     // }

//     carros.forEach(function(item, index, self){
//         console.log(item);
//         // console.log(index);
//         console.log(self);
//         console.log("=======");
//     })

 let numeros = [122, 6, 18, 43];

 console.log(numeros);

 numeros.forEach (function (item, index){
    numeros[index] = modificar(item, function(valor){
        return valor / 2;
       
    });
 });

 console.log(numeros);

 function modificar(valor, modificador){
     return modificador(valor);
 }

 