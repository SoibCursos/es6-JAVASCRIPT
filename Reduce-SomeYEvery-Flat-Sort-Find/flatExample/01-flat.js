//Reduce

const numbers=[1,2,3,4,-5,-6,7,-8,9,10];
const total=()=>{
    let acumulador=0;
    for (let i=0; i<numbers.length; i++){
        acumulador+=numbers[i];
    }
    return acumulador;
    };
    console.log(total());

    //Una forma de hacer lo anterior con Reduce

    const sumatorio=numbers.reduce((acumulador, valor)=>{
        return acumulador + valor;
    },0);

    const cart=[
        {id:1, name:"platanos", price:1.80},
        {id:1, name:"manzanas", price:0.98},
        {id:1, name:"kiwis", price:2}
    ];
        
    let totalCarrito=0;
    for (let i=0;i<cart.length;i++){
        totalCarrito+=cart[i].price;
    }
    console.log(totalCarrito);

    //con forEach sería
    cart.forEach((item)=>{
        totalCarrito+=item.price;
    });

    //Otra forma con reduce
    cart.totalCarrito=cart.reduce((acc, producto)=> acc+producto.price,0);

    console.log(totalCarrito);


//Some y every

const arr1=[1,2,3,4,8];
const arr2=[1,2,3,4,5];

// Some devuelve verdadero si hay algun elemeto verdedero del array

let testMayor5=arr1.some((item)=>item>5);
console.log(testMayor5);
testMayor5=arr2.some((item)=>item>5);
console.log(testMayor5);

//Every es al reves, devuelve verdadero cuando todos los elementos son verdaderos, basta que haya uno falso para que el return sea falso

//Flat
const arr1=[1,2,3,4,8];
const arr2=[1,2,3,4,5];
const arr3=[[1,2,3,4],[44,55,6],[6,7,8,9]];
arr3[0];
let tot=0;
for (let i=0;i<arr3.length;i++){
    console.log(arr3[i]);
        for(let j=0; j<arr3[1].length;j++){
            console.log(arr3[i][j]);
            tot+=arr3[i][j];
        }
}





//yo te doy muchos arrays, unos dentro de otros y lo uno
tot=arr3.flat();
console.log(tot);

// ahora voy a sumar todos los elementos de todos los arrays
tot=arr3.flat().reduce((acc, item)=>acc+item);
console.log(tot);

//Mirar en W3C flatMap()------arr3.flatMap();

//ordenar usando sort. Crear un array nuevo ordenado usando sort de menos a mayou precio
console.log(cart2);
// const cart2PrecioMenor=arr4.sort[];