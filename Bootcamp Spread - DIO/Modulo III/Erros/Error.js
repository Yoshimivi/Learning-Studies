function validateArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Send the parameters')

    if (typeof arr !== 'object')
      throw new TypeError('Array must to be of type OBJECT')

    if (typeof num !== 'number')
      throw new TypeError('Num must to be of type NUMBER')

    if (arr.length !== num) throw new RangeError('Invalid size!')

    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('This ERROR is a ReferenceError')
      console.log(e.message)
      console.log(e.name)
      console.log(e.stack)
    } else if (e instanceof TypeError) {
      console.log('This ERROR is a TypeError')
      console.log(e.message)
      console.log(e.name)
      console.log(e.stack)
    } else if (e instanceof RangeError) {
      console.log('This ERROR is a RangeError')
      console.log(e.message)
      console.log(e.name)
      console.log(e.stack)
    } else {
      console.log('Type of ERROR not expected' + e)
    }
  }
}

console.log(validateArray([1, 2, 3, 4, ], 5))
