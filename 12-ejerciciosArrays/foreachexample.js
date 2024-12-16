//Lo siguiente es un array -[]- de objetos -{}- 
const empresas = [
    { name: "Financiera Alpha", category: "Finanzas", start: 1981, end: 2004 },
    { name: "Tienda Beta", category: "Minorista", start: 1992, end: 2008 },
    { name: "Motores Gamma", category: "Automoción", start: 1999, end: 2007 },
    { name: "Retail Delta", category: "Minorista", start: 1989, end: 2010 },
    { name: "Tecno Epsilon", category: "Tecnología", start: 2009, end: 2014 },
    { name: "Inversiones Zeta", category: "Finanzas", start: 1987, end: 2010 },
    { name: "Autos Omega", category: "Automoción", start: 1986, end: 1996 },
    { name: "Innovación Sigma", category: "Tecnología", start: 2011, end: 2016 },
    { name: "Market Kappa", category: "Minorista", start: 1981, end: 1989 },
  ];

//imprimir con document.write lo siguiente para cada empresa:
//<p>Finanzas <strong>'Financiera Alpha'</strong> te desea <em> Feliz Navidad</em>.</p>
//<sm>Contigo desde 1981. </sm> (con forEach)

empresas.forEach((todosElementos)=>{
    const text=`<p><strong>${todosElementos.name}</strong> te desea <em> Feliz Navidad</em>.</p>
    <sm>Contigo desde ${todosElementos.start}. </sm>`;
    document.write(text);
  });

  //Los metodos se pueden concatenar segun el valor
  //const nums = [2,4,65,4,5,6,9,6,35]
  //forma con fines educativos, no se debería usar
  const nums = [2,4,65,4,5,6,9,6,35];
  const raiz=nums.map((num) =>{

    return Math.sqrt(num);
  });
  console.log(raiz);
//forma que actualmente se usa y que es la hemos de emplear
  const raizYdoble=nums.map((num)=>Math.sqrt(num)).map((num)=>num*2);

  console.log(raizYdoble);

//Crear un array con solo los numeros pares doblados usando filter y map

const paresDoblados=nums.filter((num)=> num%2===0).map((num)=>num*2);

console.log(paresDobles);


