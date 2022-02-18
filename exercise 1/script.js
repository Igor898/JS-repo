'use strict'

let number = Math.floor(Number(prompt('write number from 0 to 999, pliase')))

let numPlace = function(units, tens, hundereds) {
  this.units = units,
  this.tens = tens,
  this.hundereds = hundereds
}

let numPlace1 = new numPlace(number)

function mahination() {
  let a, b, c
  if (String(number).length == 1) {
    a = number
    numPlace1.units = a
    numPlace1.tens = 0
    numPlace1.hundereds = 0
    console.log(numPlace1)
  }
  if (String(number).length == 2) {
    a = String(number)[0]
    b = String(number)[1]
    numPlace1.units = b
    numPlace1.tens = a
    numPlace1.hundereds = 0
    console.log(numPlace1)
  }
  if (String(number).length == 3) {
    a = String(number)[0]
    b = String(number)[1]
    c = String(number)[2]
    numPlace1.units = c
    numPlace1.tens = b
    numPlace1.hundereds = a
    console.log(numPlace1)
  }
  if (number >= 1000 || isNaN(number)) {
    alert('write number from 0 to 999')
  }
}

mahination(number)

