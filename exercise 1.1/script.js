'use strict'

// Для запуска функции одну придётся временно закоментировать, так как там одинаковые переменные!!!

// ES 5

function Product(name, price) {
    this.name = name
    this.price = price
}

Product.prototype.make25PercentDiscount = function(discount) {
    this.price = this.price - (this.price / 100 * discount)
}

let item = new Product('shirt', 1000)
item.make25PercentDiscount(25)
console.log(item) 

// ES 6

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    make25PercentDiscount(discount) {
        this.price = this.price - (this.price / 100 * discount)
    }
}

let item = new Product('shirt', 1000)
item.make25PercentDiscount(25)
console.log(item) 
    