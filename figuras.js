// Código del cuadrado
console.group("Cuadrados")
// const ladoCuadratico = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadratico}`)

// const perimetroCuadrado = ladoCuadratico * 4;
// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} centimetros`)

// const areaCuadrado= ladoCuadratico * ladoCuadratico;
// console.log(`El área del cuadrado es: ${areaCuadrado} centimetros cuadrados`)
// console.groupEnd();
// // Código del triangulo
// console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5; 
// console.log(`La altura del triangulo es: ${alturaTriangulo}`);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log(`El perimetro del triangulo es ${perimetroTriangulo}`);
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log(`El área del triangulo es ${areaTriangulo}`)
// console.log(`Los lados del triángulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm `)

// console.groupEnd();

// // Código del círculo
// console.group("Círculos")

// //Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es ${radioCirculo} cm`)
// //Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log(`El diametro del circulo es ${diametroCirculo} cm`)
// //PI
const PI = Math.PI;
// console.log(`El PI del circulo es ${PI} cm`)
// // Circuferencia 
// const circunferenciaCirculo = diametroCirculo * PI;
// console.log(`El circunferencia del circulo es ${circunferenciaCirculo} cm`)
// // Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log(`El área del circulo es ${areaCirculo}cm cuadrado`)
// console.groupEnd();

function perimetroCuadrado(lado){
    return lado * 4;
}

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
function diametroCirculo(radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function areaCuadrado(lado){
    return lado * lado;
}

function calcularAreaCuadrada(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroIsosceles(lado1,base1){
    return  (Number(lado1) * 2) + (Number(base1));
}
function alturaIsosceles(lado1, base1){
    const h = Math.sqrt((Number(lado1**2))-(Number(base1**2) / 4))
    return h;
}
function calcularAreaIsosceles(h, b){
    return (Number(b*h)/2)
}
function areaIsosceles(){
    const inputLado = document.getElementById("InputIsosceles");
    const inputBase = document.getElementById("InputIsoscelesBase");
    const value = inputLado.value;
    const valueBase = inputBase.value;
    
    const altura = alturaIsosceles(value, valueBase);
    console.log(altura)
    const area = calcularAreaIsosceles(valueBase, altura)
    alert(area)
}
function perimetroIsosceles(){
    const inputLado = document.getElementById("InputIsosceles");
    const inputBase = document.getElementById("InputIsoscelesBase");
    const value = inputLado.value;
    const valueBase = inputBase.value;

    const perimetro = calcularPerimetroIsosceles(value,valueBase);
    console.log(perimetro);
    alert(perimetro);
}

function secondGrand(array){
    let first = array[0];
    let second = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > first){
            second = first;
            first = array[i]
        }
        if(array[i] > second && array[i] < first){
            second = array[i];
        }
    }
    return second;
}
let nums = [1, 44, 25, 67, 4, 46, 66]

console.log(secondGrand(nums));