// can call a function in this manner
// require('./export')()

// ----------------------------

// var exportedFn = require('./export')
// console.log(exportedFn)

// ----------------------------

// var exportedClass = require('./export')
// var apple = new exportedClass('apple', 7.9)
//
// console.log(apple)

// ----------------------------
var fromExport = require('./export')

fromExport.foo()

var apple = new fromExport.Fruit('apple', 3.9)

console.log(apple)
