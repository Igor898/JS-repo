'use strict'

function typeNumber(num) {
    let zero = ' - это ноль'
    let evenNumber = ' - чётное число'
    let oddNumber = ' - нечётное число'
    if (num === 0) {
        console.log(num + zero)
    }
    if (num % 2 === 0 && num !== 0) {
        console.log(num + evenNumber)
    }
    if (num % 2 !== 0 && num !== 0) {
        console.log(num + oddNumber)
    }
}
 
for (let i = 0; i < 10 + 1; i++) {
    typeNumber(i)
}
