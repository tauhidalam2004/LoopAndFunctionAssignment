// Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n. 
function sumNumber(n){
    let sum = 0;
    for(let i = 0; i<= n; i++){
        sum +=i;
    }

    return sum;
}
console.log(sumNumber(54));