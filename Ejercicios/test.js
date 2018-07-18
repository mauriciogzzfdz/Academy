// Creamos Promesa
const promise = new Promise((res,rej)=>{
let cont = 0;
for (let i = 0; i < 10000; i++){
    cont ++;
}
    res(cont);

});

// const promise = new Promise((res,rej)=>{
//     setTimeout(()=>res("acabo timeout"), 5000);
//     });


// Consumes la promesa

promise.then((res)=>console.log(res));
console.log("hola");