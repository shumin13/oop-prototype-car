// var foo = function () {
//   console.log('fighters')
// }
//
// module.exports = foo

// ----------------------------

// module.exports = function () {
//   console.log('weezer')
// }

// ----------------------------
//
// var fruit = {
//   name: 'apple',
//   price: 7.9
// }

var foo = function () {
  console.log('fighters')
}

class Fruit {
  constructor (name, price) {
    this.name = name
    this.price = price
  }
}

module.exports = {
  foo: foo,
  Fruit: Fruit
}
