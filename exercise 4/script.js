// №4
function sum(a, b) {
    a = Number(prompt('Введите число'))
    b = Number(prompt('Введите число'))
    if (isNaN(a) || isNaN(b)) {
        return 'Нужно ввести число'
    } else return a + b
}
alert(sum())

function subtract(a, b) {
    a = Number(prompt('Введите число'))
    b = Number(prompt('Введите число'))
    if (isNaN(a) || isNaN(b)) {
        return 'Нужно ввести число'
    } else return a - b
}
alert(subtract())

function multiply(a, b) {
    a = Number(prompt('Введите число'))
    b = Number(prompt('Введите число'))
    if (isNaN(a) || isNaN(b)) {
        return 'Нужно ввести число'
    } else return a * b
}
alert(multiply())

function divide(a, b) {
    a = Number(prompt('Введите число'))
    b = Number(prompt('Введите число'))
    if (isNaN(a) || isNaN(b) || b === 0) {
        return 'Нужно ввести число, последнее не должно быть 0'
    } else return a / b
}
alert(divide())