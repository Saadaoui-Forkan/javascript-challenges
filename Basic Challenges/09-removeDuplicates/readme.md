# Challenge: Remove Duplicates

## Instructions  
Write a function called __removeDuplicates__ that takes in an array and returns a new array with duplicates removed.

## Examples
```
    removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // [1]
    removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello' 2, 3, 'hello', true]); // [1, 2, 3, 4, 5, true, 'hello']   
```
## Solution  
```
    function removeDuplicates (arr) {
        let removed = arr.filter((el, index) => (
            index == arr.indexOf(el)
        ))
        return removed

        /**
            * Second Solution,
            * ************
            * const uniqueArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (!uniqueArr.includes(arr[i])) {
                uniqueArr.push(arr[i]);
                }
            }
            return uniqueArr;
        */
    }
    console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // [1]
    console.log(removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true])); // [1, 2, 3, 4, 5, true, 'hello']
```