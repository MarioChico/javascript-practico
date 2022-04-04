const lista = [
    2,
    3,
    5,
    2,
    4,
    5,
    6,
    2,
];

const lista1Count = {};

lista.map(
    function (elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    (valorAcumulado, nuevoElemento) =>
        valorAcumulado[1] - nuevoElemento[1]
    
);

const moda = lista1Array[lista1Array.length - 1]
