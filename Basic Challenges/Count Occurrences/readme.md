# Challenge: Count Occurrences
## Instructions
Write a function called __countOccurrences()__ that takes in a string and a character and returns the number of occurrences of that character in the string.

## Examples
```
countOccurrences('hello', 'l'); // 2
countOccurrences('hello', 'H'); // 0
countOccurrences('hello', 'z'); // 0
countOccurrences('', 'l'); // Error: Empty string

```

## Solutions
```
function countOccurrences(str, c){
    let count = 0;
    if (str.length == 0) {
        throw new Error('Error: Empty string')
    } else {
        for(i=0; i<str.length; i++){
            if(str[i] === c){
                count += 1
            }
        }
        return count
    }
}

```
