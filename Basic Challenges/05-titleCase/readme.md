# Challenge: Title Case

## Instructions  
Write a function called __titleCase__ that takes in a string and returns the string with the first letter of each word capitalized.


## Examples
```
    titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
    titleCase('sHoRt AnD sToUt'); // Short And Stout
    titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // Here Is My Handle Here Is My Spout

```
## Solution  
```
    function titleCase(str) {
        const str_2 = str.split(' ')
        .map(el => {
            return el[0].toUpperCase() + el.slice(1)
        })
        .join(' ')
        return str_2
    }
```