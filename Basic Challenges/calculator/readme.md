## Instructions  
Write a function called __calculator__ that takes in 2 numbers and an operator and returns the result of the calculation.

## Examples
`
    calculator(1, 2, '+') // 3  
    calculator(10, 5, '-') // 5  
    calculator(2, 2, '*') // 4  
    calculator(10, 5, '/') // 2  
    calculator(3, 0, '/') // Division by zero is not allowed  
    calculator(10, 5, '#') // Invalid operator  
`

## Solution  
`
    function calculator(a, b, op){
        let result;
        if(op == "+") {
            return result = a + b
        } else if(op == "-"){
            return result = a - b
        } else if(op == "*"){
            return result = a * b
        } else if(op == "/"){
            if(b == 0){
                throw new Error("Division by zero is not allowed")
            }
            return result = a / b
        } else {
            throw new Error('Invalid operator')
        }
        return result
    }
`