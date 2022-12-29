// Baby weather app

// let weather = prompt('How is the weather?')

// if (weather == 'rain') {
//   console.log('Grab umbrella')
// } else {
//   console.log('Wear sunglasses')
// }

function sayMyName(name) {
  console.log(name)
}

// sayMyName('Milo')

/**
* Greet someone's name
* @param {string} name The name of the person
* @log output the greetings with name
*/
function greeting(name) {
  greet = `hi ${name}, nice to meet you!`
  console.log(greet)
}

// greeting('Looo')

function sum(a, b) {
  return a + b
}

// sum = sum(1, 2)
// console.log(sum)

function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100
  const tipAmount = food * tipPercentage
  return sum(food, tipAmount)
}

// console.log(calculateFoodTotal(300, 20))

const sumArrow = (a, b) => a + b

// console.log(sumArrow(1, 2))

const groceries = ['banana', 'apple', 'orange', 'pear']
// console.log(groceries)
// console.log(groceries[0])

groceries.push('blueberry')
groceries.push('strawberry')
// console.log(groceries.slice(-3))


// Objects {}

const person = {
  name: 'Leonardo',
  shirt: 'white'
}

person.phone = '100100101'
// console.log(person)

// function
const introducer = (name, shirt) => {
  // Object
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liability: 50000,
    netWorth: function() {
      return this.assets - this.liability
    }
  }

  // template literal
  const intro = `Hi, my name is ${person.name}, the color of my shirt is ${person.shirt}, my net worth is $${person.netWorth()}`

  return intro
}

// console.log(introducer('Amirul', 'gray'))


const double = (numbers) => {
  let result = []
  for (const num in numbers) {
    result.push(num * 2)
  }
  return result
}

console.log(double([1, 2, 3, 4, 5, 6]))