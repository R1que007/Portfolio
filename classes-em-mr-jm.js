// Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
const blackCoffee = new Coffee("black", 1, 2)
console.log(blackCoffee)

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.

class LatteMaker {
    constructor(flavor, milk, shots) {
        this.flavor = flavor
        this.milk = milk
        this.shots = shots
    }
    profile() {
        return `flavor ${this.flavor} milk ${this.milk} shots ${this.shots}`
    }
}
const latteCoffee = new LatteMaker("regular", 0, 1)
console.log(latteCoffee.profile())
const hazelNutCoffee = new LatteMaker("hazel", 1, 2)
console.log(hazelNutCoffee.profile())

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class VolCylinder {
    constructor(radius, height) {
        this.
    }
}
