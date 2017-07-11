// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats, passengers) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = "manufacturer"
    this.running = false
    this.passengers = passengers || []
  }

  // add the sell function
  sell (newOwner) {
    if(isNaN(newOwner)) {
      this.previousOwners.push(this.owner)
      this.owner = newOwner
    } else {
      return 'car can only be sold to a real person with name, please input a string'
    }
  }

  // add the paint function
  paint (newColor) {
    if(isNaN(newColor)){
      this.color = newColor
    } else {
    return 'car can only be painted with real color, please input a string'
    }
  }

  start () {
    this.running = true
  }

  off () {
    this.running = false
  }

  driveTo (destination) {
    if (isNaN(destination) && this.running === true) {
      console.log('driving to ' + destination)
      return true
    } else {
      return false
    }
  }

  park () {
    if (this.running === false) {
      console.log('parked!')
      return true
    } else {
      return false
    }
  }

  pickUp(name) {
    if (isNaN(name) && this.running === true && this.seats-1 > this.passengers.length) {
      console.log('driving to pick up ' + name)
      this.passengers.push(name)
      return true
    } else {
      return false
    }
  }

  dropOff (name) {
    if (isNaN(name) && this.running === true && this.passengers.includes(name)) {
      console.log('driving to drop off ' + name)
      this.passengers.splice(this.passengers.indexOf(name),1)
      return true
    } else {
      return false
    }
  }

  passengerCount () {
    return this.passengers.length
  }

}

// node src/Car.js
// var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)
// console.log(c1)
// c1.sell('prima')
// c1.paint('blue')
// console.log(c1)

// export the Car class //
// this is required for the carTest.js to load this //

module.exports = Car;
