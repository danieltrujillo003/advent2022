export const getRandomFrom = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

export const sumArrayValues = (array) => {
  return array.reduce((acc, value) => acc += value, 0)
}

export const numberWithinRange = (range, number, equal = true) => {
  const [init, end] = range
  return equal ? number >= init && number <= end : number > init && number < end
}
