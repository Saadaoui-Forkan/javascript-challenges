# Challenge: Palindrome

## Instructions  
Write a function called __isPalindrome__ that takes in a string and returns __true__ if the string is a palindrome and __false__ if it is not.




## Examples
```
    isPalindrome('madam') // true
    isPalindrome('racecar') // true
    isPalindrome('hello') // false
    isPalindrome('') // true''
```
## Solution  
```
    function reverseString (str) {
        let reversed = []
        for (let i = str.length - 1; i >= 0; i--) {
            reversed.push(str[i])
        }
        let newStr = reversed.join('')
        if (newStr == str) {
            return true
        } else {
            return false
        }
    }
    console.log(reverseString('madam'))
```