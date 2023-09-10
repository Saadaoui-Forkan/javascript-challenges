# Challenge: Array Intersection

## Instructions  
Write a function called __arrayIntersection__ that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).

## Examples
```
arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]); // should return [1, 3, 5]
arrayIntersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]); // should return []
arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]); // should return [1, 2, 3, 4, 5]   
```
## Solution  
```
function arrayIntersection (arr1, arr2) {
    let arr = []
    arr1.map((el, i) => {
        if(arr2.includes(el)) {
            arr.push(el)
        }
        // console.log(arr)
        // console.log(arr2[i])
        // console.log({el})
        
    })
    return arr
}
console.log(arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])); 
console.log(arrayIntersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]));
console.log(arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
```