console.log("Inicio");

setTimeout( () => {
    console.log("Dentro de una función asíncrona 1");
}, 4000); 

setTimeout( () => {
    console.log("Dentro de una función asíncrona 2");
}, 3000);

console.log(" Done ");