// №5
function sum(a, b) {
    a = Number(prompt('Введите число'))
    b = Number(prompt('Введите число'))
    if (isNaN(a) || isNaN(b)) {
        return 'Нужно ввести число'
    } else return a + b
}

function subtract(a, b) {
    a = Number(prompt('Введите число'))
    b = Number(prompt('Введите число'))
    if (isNaN(a) || isNaN(b)) {
        return 'Нужно ввести число'
    } else return a - b
}

function multiply(a, b) {
    a = Number(prompt('Введите число'))
    b = Number(prompt('Введите число'))
    if (isNaN(a) || isNaN(b)) {
        return 'Нужно ввести число'
    } else return a * b
}

function divide(a, b) {
    a = Number(prompt('Введите число'))
    b = Number(prompt('Введите число'))
    if (isNaN(a) || isNaN(b) || b === 0) {
        return 'Нужно ввести число, последнее не должно быть 0'
    } else return a / b
}

function mathOparation(arg1, arg2, operation) {
    operation = prompt('Напишите, какую операцию вы хотите совершить: +, -, *, /')

    switch(operation) {
        case '+':
            alert(sum(arg1, arg2))
            break
        case '-':
            alert(subtract(arg1, arg2))
            break
        case '*':
            alert(multiply(arg1, arg2))
            break            
        case '/':
            alert(divide(arg1, arg2))
            break
    }
}
mathOparation()