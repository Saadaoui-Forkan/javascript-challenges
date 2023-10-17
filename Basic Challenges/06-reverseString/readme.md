# Challenge: Reverse String

## Instructions  
Write a function called __reverseString__ that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. If you get stuck, you can always use the built-in methods to solve the problem.


## Examples
```
    reverseString('hello') // 'olleh'
    reverseString('world') // 'dlrow'
    reverseString('') // ''

```
## Solution  
```
    function reverseString (str) {
        const newArr = str.split('').reverse()
        const initialValue = "";
        const newStr = newArr.reduce((acc, currentValue) => acc + currentValue, initialValue);
        return newStr
    }
    console.log(reverseString('world'))
```