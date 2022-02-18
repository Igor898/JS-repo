'use strict'

// Для запуска функции одну придётся временно закоментировать, так как там одинаковые переменные!!!

// ES 5

function Post(author, text, date) {
    this.author = author
    this.text = text
    this.date = date
}

let Post1 = new Post('Igor', 'хххххххххххх', new Date())

Post.prototype.edit = function() {
    this.text = prompt('write any text')
}

Post1.edit()

console.log(Post1)

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date)
    this.highlighted = false
}

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true
}

let AttachedPost1 = new AttachedPost('Nikita', 'xxxxxxxxxxx', new Date())

AttachedPost1.makeTextHighlighted()

console.log(AttachedPost1) 

// ES 6

class Post {
    constructor(author, text, date) {
        this.author = author
        this.text = text
        this.date = date
    }
    edit() {
        this.text = prompt('write any text')
    }
}

let Post1 = new Post('Igor', 'хххххххххххх', new Date())

Post1.edit()

console.log(Post1)

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date)
        this.highlighted = false
    }
    makeTextHighlighted() {
        this.highlighted = true
    }
}

let AttachedPost1 = new AttachedPost('Nikita', 'xxxxxxxxxxx', new Date())

AttachedPost1.makeTextHighlighted()

console.log(AttachedPost1)






