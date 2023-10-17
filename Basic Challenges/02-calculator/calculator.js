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