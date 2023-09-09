## Instructions  
Write a function called __findMaxNumber__ that takes in an array of numbers and returns the largest number in the array.


## Examples
```
    findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10
    findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // 10
    findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6]); // 10

```
## Solution  
```
    function findMaxNumber(arr) {
            let max = arr[0];
            for(i=0; i<arr.length; i++){
                if ( arr[i] >= max ) {
                    max = arr[i]
                }
            }
            return max
        }
```