const apple = {
  value: 2
}

const orange = {
  value: 3
}

const nums = [1, 2, 5, 8, 11]

function mapWithThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value
  }, thisArg)
}

console.log('this -> apple', mapWithThis(nums, apple))

console.log('this -> orange', mapWithThis(nums, orange))

function mapWoThis(arr) {
  return arr.map(function (item) {
    return item * 2
  })
}

console.log('Map without this', mapWoThis(nums))
