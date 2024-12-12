//ejercicios arrays
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

