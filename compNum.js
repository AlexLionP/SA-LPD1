/*
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos 
en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, 
el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados 
de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e 
imprimir un mensaje por consola o por el DOM diciendo que 
los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte 
que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4
Pruébalo con las combinaciones de números que se te ocurran
*/
//Llamamos a prompt para solicitar al usuario introducir tres numeros
const prompt = require("prompt-sync")();
//Se utiliza parseInt para forzar un número entero por si el usuario ingresa algún número como string
let num1 = parseInt(prompt("Ingrese el primer numero "));
let num2 = parseInt(prompt("Ingrese el segundo numero "));
let num3 = parseInt(prompt("Ingrese el tercer numero "));
//Se inicializan en 0 tres variables para designar los valores mayor, menor y medio
numMayor = 0;
numMenor = 0;
numMedio = 0;
//If para checar si algún número es igual a otro
if (num1 === num2 ||  num1 === num3 || num2 === num3) {
    console.log("Hay al menos dos numeros que son iguales");
}
//Anidación de Ifs para hacer la comparación por pares de numeros
if(num1 < num2){
    if (num2 < num3) {
        numMayor = num3;
        numMedio = num2;
        numMenor = num1; 
    }
    else if (num1 < num3) {
        numMayor = num2;
        numMedio = num3;
        numMenor = num1;
    }
    else{
        numMayor = num2;
        numMedio = num1;
        numMenor = num3;
    }
}
else {
    if(num2 > num3) {
        numMayor = num1;
        numMedio = num2;
        numMenor = num3;
    }
    else if (num1 > num3) {
        numMayor = num1;
        numMedio = num3;
        numMenor = num2;
    }
    else {
        numMayor = num3;
        numMedio = num1;
        numMenor = num2;
    }
}
//El resultado final se imprime
//console.log(`El número mayor es ${numMayor}, el número medio es ${numMedio} y el número menor es ${numMenor}`);
console.log(`${numMayor}, ${numMedio}, ${numMenor}`);
console.log(`${numMenor}, ${numMedio}, ${numMayor}`);