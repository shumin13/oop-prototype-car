// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')

// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var honda = new Car('Honda', 'Vuzel', 2017, 'Blue', 7)

// ----------------------------
// test Constructor
console.log('Testing Constructor')

assert.strictEqual(honda.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(honda.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(honda.year, 2017, 'Constructor did not set year.')
assert.strictEqual(honda.color, 'Blue', 'Constructor did not set color.')
assert.strictEqual(honda.seats, 7, 'Constructor did not set seats.')
// run the success function once you're done with a set of tests
success()

// ----------------------------
// test sell(newOwner)
console.log('Testing sell(newOwner)')

// test if the owner array is updated
honda.sell('Lenny')
assert.strictEqual(honda.owner, 'Lenny', 'Owner didn\'t update to newOwner.')

// test if the previousOwners array is updated
honda.sell('Shimei')
var lastPrevOwner = honda.previousOwners[honda.previousOwners.length - 1]
assert.strictEqual(lastPrevOwner, 'Lenny', 'There should be two previousOwners after two successful selling.')

// test if newOwner is a non-string argument
honda.sell('0123')
assert.strictEqual(honda.owner, 'Shimei', 'Owner should remain if newOwner is not a string.')

success()

// ----------------------------
// test paint(newColor)
console.log('Testing paint(newColor)')

// test if the color is updated
honda.paint('Green')
assert.strictEqual(honda.color, 'Green', 'Color didn\'t update to newColor.')

// test if newColor is a non-string argument
honda.paint(false)
assert.strictEqual(honda.color, 'Green', 'Color should remain if newColor is not a string.')

success()

// ----------------------------
// test start()
console.log('Testing start()')

// test if running value is updated to true
honda.start()
assert.strictEqual(honda.running, true, 'Running value didn\'t update to true.')
// OR assert.ok(honda.running, <message>)
success()

// ----------------------------
// test off()
console.log('Testing off()')

// test if running value is updated to false
honda.off()
assert.strictEqual(honda.running, false, 'Running value didn\'t update to false.')
success()

// ----------------------------
// test driveTo(destination)
console.log('Testing driveTo(destination)')

// test if it returns true if the car is running
honda.start()
assert.strictEqual(honda.driveTo('GA'), true, 'driveTo(destination) should return true if the car is running.')

// test if it returns false if the car is not running
honda.off()
assert.strictEqual(honda.driveTo('GA'), false, 'driveTo(destination) should return false if the car is not running.')

// test if destination is a non-string argument
honda.start()
assert.strictEqual(honda.driveTo('123'), false, 'driveTo(destination) should return false if the destination is not a string.')

success()

// ----------------------------
// test park()
console.log('Testing park()')

// test if it returns true if running is false
honda.off()
assert.strictEqual(honda.park(), true, 'park() should return true if the car is not running.')

// test if it returns false if running is true
honda.start()
assert.strictEqual(honda.park(), false, 'park() should return false if the car is running.')

success()

// ----------------------------
// test passengers
console.log('Testing passengers as a property to the constructor')

// test if passengers is an empty array if not specified
var c1 = new Car('Audi', 'Vuzel', 2017, 'red', 5)
assert.strictEqual(c1.passengers.length, 0, 'Passengers should be an empty array.')

success()

// ----------------------------
// test pickUp(name)
console.log('Testing pickUp(name)')

// test if it returns true if car is running and there are seats available
honda.start()
assert.strictEqual(honda.pickUp('Prima1'), true, 'pickUp(name) should return true if the car is running and there are seats available.')

// test if passengers array is updated and passenger name is at the end of the array
honda.pickUp('Prima2')
assert.strictEqual(honda.passengers[honda.passengers.length - 1], 'Prima2', 'Passenger\'s name should be in the passengers array.')

// test if it returns false if car is not running but there are seats available
honda.off()
assert.strictEqual(honda.pickUp('Prima3'), false, 'pickUp(name) should return false if the car is not running.')

// test if it returns false if car is running but there is no seat available
honda.start()
honda.pickUp('Prima3')
honda.pickUp('Prima4')
honda.pickUp('Prima5')
honda.pickUp('Prima6')
assert.strictEqual(honda.pickUp('Prima7'), false, 'pickUp(name) should return false if there is no seat available.')

// test if name is a non-string argument
honda.start()
honda.dropOff('Prima1')
honda.dropOff('Prima2')
honda.dropOff('Prima3')
honda.dropOff('Prima4')
honda.dropOff('Prima5')
honda.dropOff('Prima6')
assert.strictEqual(honda.pickUp('0123'), false, 'pickUp(name) should return false if the name is not a string.')

success()

// ----------------------------
// test dropOff(name)
console.log('Testing dropOff(name)')

// test if it returns true if car is running and passenger\'s name is in the array
honda.start()
honda.pickUp('Prima1')
assert.strictEqual(honda.dropOff('Prima1'), true, 'dropOff(name) should return true if car is running and passenger\'s name is in the array.')

// test if passenger\'s name is removed from the array if they are in the array
honda.pickUp('Prima1')
honda.dropOff('Prima1')
assert.strictEqual(honda.passengers.includes('Prima1'), false, 'Passenger\'s name should be removed from the passengers array.')

// test if it returns false if car is not running but passenger\'s name is in the array
honda.off()
honda.pickUp('Prima1')
assert.strictEqual(honda.dropOff('Prima1'), false, 'dropOff(name) should return false if car is not running.')

// test if it returns false if car is running but passenger\'s name is not in the array
honda.start()
honda.pickUp('Prima1')
assert.strictEqual(honda.dropOff('Prima2'), false, 'dropOff(name) should return false if passenger\'s name is not in the array.')

// test if name is a non-string argument
honda.start()
assert.strictEqual(honda.dropOff('0123'), false, 'dropOff(name) should return false if the name is not a string.')

success()

// ----------------------------
// test passengerCount()
console.log('Testing passengerCount()')

// test if the number of passengers currently in the car is correct
honda.passengers = []
honda.pickUp('Prima1')
honda.pickUp('Prima2')
honda.pickUp('Prima3')
honda.pickUp('Prima4')
honda.dropOff('Prima1')
assert.strictEqual(honda.passengerCount(), 3, 'There should be 3 passengers currently in the car.')

success()

// ----------------------------
// var c2 = new Car()
// Should return === "car can't be instantiated, required parameters are not given"

// car.start() - error case: car.running !== false
//
// car.off() - error case: car.running !== true

// car.park([]) - throw error - isNaN works if argument is an empty array

// if an argument consists of two or more strings

// if no driver?

// if passengerCount does not return a number
