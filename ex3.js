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
return console.log(sumTotal);
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

//? Calcular el promedio de strings. Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param){
let sum1 = 0;
for (i = 0; i < param.length; i++){
    if (typeof param[i] === 'string'){
        sum += param[i].length
    }
}
return console.log(sum1 / param.length)
}

averageWord(mixedElements)


//!Interacción 6

//? Valores únicos, recorrer el array, eleminar elementos duplicados y retornar array sin elementos duplicados. 

const duplicates = ['sushi',
'pizza',
'burger',
'potatoe',
'pasta',
'ice-cream',
'pizza',
'chicken',
'onion rings',
'pasta',
'soda']; 

function removeDuplicates(arrayOfObjects){
    let uniquesObjects = '';
    for (i = 0; i < arrayOfObjects.length; i++){
        if (arrayOfObjects[i] === duplicates);{
        arrayOfObjects.splice(uniquesObjects, 1)
    }
}
return arrayOfObjects
}

console.log(removeDuplicates(duplicates));










