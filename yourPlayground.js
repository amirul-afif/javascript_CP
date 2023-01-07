// Baby weather app

// let weather = prompt ('How is the weather?')

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
* @param string name The name of the person
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


// const double = (numbers) => {
//   let result = []
//   for (const num in numbers) {
//     result.push(num * 2)
//   }
//   return result
// }

// console.log(double([1, 2, 3, 4, 5, 6]))

const howManyLetters = () => {
  const phrase = 'hey, can you help me later in the evening or tomorrow?'

  let result = 0
  // let alpha = 0

  // for (const letter of phrase) {
  //   // console.log(letter)
  //   // result = Number(letter) + 1
  //   if (letter != ' ' && letter != ',' && letter != '?') {
  //     letter.charCodeAt
  //     alpha++
  //   }
  // }
  // return phrase.length
  // console.log('Result: ' + phrase.length)
  // console.log('Alpha: ' + alpha)

  for (const index in phrase) {
    console.log(Number(index) + 1)
    result = Number(index) + 1
  }

  return { result }
}

// console.log(howManyLetters())
// console.log('test')

const sumArray = (numbers) => {
  let result = 0

  for (const i of numbers) {
    result += i
  }

  return { result }
}

// const arr = [1, 2, 3, 4, 5]
// console.log(sumArray(arr))

const max = (numbers) => {
  let result = numbers[0]

  for (const i of numbers) {
    if (i > result) {
      result = i
    }
  }
  return { result }
}

// const arr = [11, 2, 1113, 4, 13]
// console.log(max(arr))

const letterFrequency = (phrase) => {

  const freq = {}

  for (const letter of phrase) {
    if (letter in freq) {
      freq[letter] += 1
    } else {
      freq[letter] = 1
    }
  }
  return freq
}

// phrase = 'hello i am amirul'
// console.log(letterFrequency(phrase))

const wordFrequency = (phrase) => {
  // let frequency = {}
  words = phrase.split(' ')

  // for (word of words) {
  //   if (word in frequency) {
  //     frequency[word]++
  //   } else {
  //     frequency[word] = 1
  //   }
  // }

  return letterFrequency(words)

  // return frequency
}

// arr = 'lol what is that lol, is he serious like wtf lol man'
// console.log(wordFrequency(arr))

const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}

// numbers = [1, 2, 3]
// console.log(doubleMap(numbers))

// const filter = (numbers, greaterThan) => {
//   return numbers.filter(number => number > greaterThan)
// }

// numbers = [11, 2, 23]
// console.log(filter(numbers, 5))

const actors = [
  { name: 'Johnny', netWorth: 2000000 },
  { name: 'Amber', netWorth: 10 },
  { name: 'Leonardo', netWorth: 100000 },
]

// let result = actors.filter(actor => actor.netWorth > 10)
// console.log(result)

// playground.innerHTML = `<h1>${JSON.stringify(result.map(actor => actor.name).join(', '))}</h1>`

function sum(a, b) {
  return a + b
}

function mux(a, b) {
  return a * b
}

const nums = [1, 2, 3, 4, 10]

// const result = nums.reduce(mux)
const result = actors.reduce((prev, curr) => prev + curr.netWorth, 0)
// console.log(result)

const randomFruit = (fruits) => {
  const index = Math.floor(Math.random() * fruits.length)
  return fruits[index]
}

let fruits = ['banana', 'apple', 'orange', 'pear', 'strawberry', 'blueberry', 'kiwi']
// console.log(fruits[0])
// for (const i in fruits) {
//   console.log(randomFruit(fruits))
// }

const weatherScore = (weather) => {
  let score

  if (weather == 'rainy') {
    score = 1
  } else if (weather == 'sunny') {
    score = -1
  } else {
    score = 0
  }

  return score
}

console.log(weatherScore('rainy'))