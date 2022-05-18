const list = [
  {
    name: 'chocolate',
    price: 3
  },
  {
    name: 'coffe',
    price: 7
  },
  {
    name: 'butter',
    price: 5
  }
]

const availableBalance = 23

function calcBalance(availableBalance, list) {
  return list.reduce(function (prev, current, index) {
    console.log('round ',  index + 1 )
    console.log({ prev })
    console.log({ current })
    return prev - current.price
  }, availableBalance)
}

console.log(calcBalance(availableBalance, list))
