debugger;
//8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevarCuadrado(array){
    const newArray=[];
    for (let i = 0; i < array.length; i++) {
        const element=array[i]**2;
        newArray.push(element);
    }
     return newArray;
}

alert(elevarCuadrado([23,56,12,34]));

