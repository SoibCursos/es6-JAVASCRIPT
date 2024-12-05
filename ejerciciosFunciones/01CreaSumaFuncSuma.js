//Crea un función que sume dos números
debugger;
function adding(n1,n2){
    let resul=(n1+n2);
    return resul;
}

let num1=parseFloat(prompt("-SUMA-Introduce núm.1"));
let num2=parseFloat(prompt("-SUMA-Introduce núm.2"));
alert(`La suma es ${num1} + ${num2} = + ${adding(num1,num2)}`);
//otra forma de hacerlo
function adding2(n1,n2){
return n1+n2;
}
adding2(3,4);
alert(adding2(8,9));

//-------------------------------- 

//Crea una función que al darle un array devuelva el mayor numero del mismo
function getMaxValue(array){
    let max=0;
    for(let i=0;i<array.length;++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}
let introArray=prompt("introduce un ARRAY");
alert("el mayor es=" + getMaxValue(introArray));

//3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function cuentaVocales(frase){
    let numVocales=0;
    const vocales="aeiouAEIOU";

    for (let i=0;i<frase.length;++){
        for (let j=0;j<vocales.length;++)
            if(frase[i]===vocales[j]){
                numVocales++;
                break;
            }
    }
    return numVocales;
}

console.log