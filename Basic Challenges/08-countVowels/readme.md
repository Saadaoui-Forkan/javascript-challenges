# Challenge: Palindrome

## Instructions  
Write a function called __countVowels__ that takes in a string and returns the number of vowels in the string.



## Examples
```
    countVowels('hello'); // 2
    countVowels('why'); // 0
    countVowels('mississippi'); // 4    
```
## Solution  
```
    function countVowels (str) {
            let count = 0
            str = str.toLowerCase()
            for (let index = 0; index < str.length; index++) {
                if (
                    str[index] === "a" ||
                    str[index] === "e" ||
                    str[index] === "i" ||
                    str[index] === "o" ||
                    str[index] === "u" 
                ){
                    count ++
                }
            }
            return count
        }
        console.log(countVowels('hello')); // 2
        console.log(countVowels('why')); // 0
        console.log(countVowels('mississippi')); // 4
```