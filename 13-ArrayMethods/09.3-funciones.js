//Mas sobre callBacks

function cocinar(receta, callback){
    console.log(`Oido cocina: una de ${receta} ...`);
    setTimeout(()=>{
        console.log(`${receta} esta listo`);
        const plato=`Una racion de ${receta}`;
        callback(receta);
    },5000);
}

function servirPlato(){
console.log(`Sirviendo el ${plato} en la mesa 10`);
}

function paraLlevar(plato){
    console.log(`!El ${plato} listo para Glovo`)`;`
}

const receta="Chipirones";
console.log("Iniciando el pedido de " + receta);
cocinar(receta, servirPlato);
cocinar("Patatas fritas", paraLlevar);