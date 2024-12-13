//ejercicios arrays

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
//Obtener las empresas que empezaron en 1980 o despues y cerraron en 2005 o antes
  const newEmpresas=empresas.filter((todosElementos)=>{
    return todosElementos.start >= 1980 && todosElementos.end <= 2005; 
    });
console.log(newEmpresas);
// Obrtener las empresas que tienen  10 años o mas
const empresasMas10=empresas.filter((todosElementos)=>{
  return todosElementos.end - todosElementos.start >=10;
  });
  console.log("Empresas de más de 10 años", empresasMas10);

  //map es igual que el foreach pero devuelve un array nuevo
//con lo que devuelva el callback
const empresasYearsOfActivity=empresas.map((todosElementos)=>{
  const activity={
    name: todosElementos.name,
    years: todosElementos.end - todosElementos.start,
  };
  return activity;
});

/*Se pide un array nuevo solo con el nombre de las empresas en mayusculas*/

const empresasMayusculas=empresas.map((todosElementos)=>{
  const mayusculas={
    name:todosElementos.name.toUpperCase()
  }
  return mayusculas;
})
console.log(empresasMayusculas);

//imprimir con document.write lo siguiente para cada empresa:
//<p>Finanzas <strong>'Financiera Alpha'</strong> te desea <em> Feliz Navidad</em>.</p>
//<sm>Contigo desde 1981. </sm> (con forEach)

empresas.forEach((todosElementos)=>{
  const text=`<p>${todosElementos} <strong>${todosElementos.name}</strong> te desea <em> Feliz Navidad</em>.</p>
  <sm>Contigo desde ${todosElementos.start}. </sm>`;
  document.write(text);
});