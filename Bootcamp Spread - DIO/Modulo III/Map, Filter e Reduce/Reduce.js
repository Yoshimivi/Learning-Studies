function sumNum(arr) {
  return arr.reduce(function (prev, current) {
    console.log({ prev })
    console.log({ current })
    return prev + current
  })
}

const arr = [1, 2, 3, 5]

console.log(sumNum(arr))
