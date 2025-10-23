class Calculator {
    checkArg(n1, n2) {
        if (typeof n1 !== "number" || typeof n2 !== "number") {
            return "Enter two numbers";
        }
    }
    add(number1, number2) {
        const error = this.checkArg(number1, number2);
        if (error) return error;
        const result = number1 + number2;
        return result;
    }

    subtract(number1, number2) {
        const error = this.checkArg(number1, number2);
        if (error) return error;
        const result = number1 - number2;
        return result;
    }

    multiply(number1, number2) {
        const error = this.checkArg(number1, number2);
        if (error) return error;
        const result = number1 * number2;
        return result;
    }

    divide(number1, number2) {
        const error = this.checkArg(number1, number2);
        if (error) return error;
        const result = number1 / number2;
        return result;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));

console.log(calc.subtract(10, 4));

console.log(calc.multiply(3, 6));

console.log(calc.divide(8, 2));

console.log(calc.add(283891894, 3338));

console.log(calc.subtract(2892, 10000));

console.log(calc.multiply(3892, 11));

console.log(calc.divide(188912, 2));

console.log(calc.divide("ssdiw", true));