# Challenge: FizzBuzz Array

## Instructions  
In this challenge, you will write a function called __fizzBuzzArray__ that takes in a number and returns an array. The array should contain all the numbers from 1 to the number passed in. However, if the number is divisible by 3, you should replace the number with __"Fizz"__. If the number is divisible by 5, you should replace the number with __"Buzz"__. If the number is divisible by both 3 and 5, you should replace the number with __"FizzBuzz"__.

## Examples
```
fizzBuzzArray(5); // [1, 2, "Fizz", 4, "Buzz"]
fizzBuzzArray(15); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]   
```
## Solution  
```
function fizzBuzzArray (num) {
    let arr = []
    for (let i = 1; i <= num; i++ ) {
        arr.push(i)
    }
    let newArr = arr.map((e,i)=> {
        if( e%5 === 0 && e%3 === 0) {
            return "FizzBuzz"
        } else if (e%5 === 0) {
            return "Buzz"
        } else if( e%3 === 0){
            return "Fizz"
        } else {
            return e
        }
    })
    return newArr
}
console.log(fizzBuzzArray(5)); 
console.log(fizzBuzzArray(15));
```