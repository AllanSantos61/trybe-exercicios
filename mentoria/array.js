/* Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: 
{
 pares: 0, 
 ímpares: 0 
} 
*/

let numbers = [1, 2, 3, 4, 5, 6];
let pares = 0;
let impares = 0;

function parImpar(numbers) {
    for(let index = 0; index < numbers.length; index++) {
        if((numbers[index] % 2 ) === 0) {
            pares++;
        } else {
            impares++;
        }
    }
return ("{ Pares = " + pares + ", Ímpares = " + impares + " }")
}
console.log(parImpar(numbers))