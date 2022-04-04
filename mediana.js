function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}
const lista1 = [
    6000000,
    100,
    500,
    800,
    200,
];

lista1.sort();
console.log(lista1);
const mitadLista1 = parseInt(lista1.length / 2); 
function esPar(numerito){
    if(numerito % 2 === 0){
        return true
    }else{
        return false
    }
}
let mediana;
if(esPar(lista1.length) ){
    const elemento1 =lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElementos;
}else{
    mediana = lista1[mitadLista1];
}