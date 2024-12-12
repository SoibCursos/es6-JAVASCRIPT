//foreach ejecuta una funcion callback
//para cada elemeno del array

const nums=[2,4,65,4,5,6,9,3,5];
function suma3(num){
    console.log(num+3);
}

nums.forEach(suma3);

nums.forEach(function(item,index){
    console.log(`ìndice ${index} vale: ${item}`);
});

//Arrow funct5ions en ES6
const resta3=function (num){
    return num-3;
};

const resta4=(num)=>{
    return num - 4;
};

// Si solo hay una expresion el return va implicito
//se pueden omitir las llaves
const resta5=(num)=>num-5;

nums.forEach((element)=>{
    console.log(element*2);
});

//filter ejecuta
const nums2=[2,4,65,4,5,6,9,3,5];
/*Se nos pide sacar todos los numeros pares del array, es decir, crear un nuevo array solo con los pares*/
const numsPares=nums2.filter(function(num){
    return num % 2 ===0;
});

//lo mismo con funciones flecha
const numsPares2=nums2.filter((n)=> n % 2 === 0);