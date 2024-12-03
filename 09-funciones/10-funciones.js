//Escribe una función que pase de euros a dolares
//Un Euro son 1.05 USD

/*Situar la función al principio proporciona una estructura clara y dispongo las mismas para el resto del código*/
function pasaElBillete(eurete){
    const usd=1.05;
    let cambio=eurete*usd;
    return cambio;//Saco cambio de la función, pero tengo que meterlo en algún sitio, de lo contrario lo perderé
}
//Para no perderlo lo meto en una variable que he llamado también "cambio"
/*De hecho la voy a cambiar para probar que es correcto, ya se que alguien pensara en código NINJA ;-), lodigo por lo de pollastre, VALE VEO QUE NO HA FUNCIONADO :-(*/
let eurete=prompt("Cuántos euretes tienes en el bolsillete? ");

let cambio=pasaElBillete(eurete);
alert(`Tienes ${eurete} Euros en el bolsillo que se van a convertir en ${cambio} $ USA`);

