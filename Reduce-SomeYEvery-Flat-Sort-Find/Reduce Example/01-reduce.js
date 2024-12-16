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

    

