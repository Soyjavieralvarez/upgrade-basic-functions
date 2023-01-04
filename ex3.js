//!Interacción 1

//?

function sum(numberOne, numberTwo) {
    if (numberOne > numberTwo){
        return numberOne
    }else{
        return numberTwo; 
    }
}

sum(3,1)

//Falta por ejecutar

//!Interacción 2


//?Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tengan la misma longitud deberá devolver el primero

const avengers = ["Hulk", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M."];

function findLongestWord(arrayOfElements) { 
 let longestWord = '';
 for (i = 0; i < arrayOfElements.length; i++){
    if (longestWord < arrayOfElements[i].length){
    longestWord = arrayOfElements[i];
 }
}
return console.log(longestWord);
}

console.log(findLongestWord(avengers));


  //!Interacción 3

  //? Implementa una función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz

  const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(arrayOfNumbers){
    let sumTotal = 0;
    for (i = 0; i < arrayOfNumbers.length; i++){
    sumTotal += arrayOfNumbers[i];
}
return console.log(sum);
}

sumAll(numbers);

//!Interacción 4

//? Calcular el promedio. 

const numbers1 = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return console.log(sum / param.length)
}

average(numbers1);

//!Interacción 5

//? Calcular el promedio de strings. 










