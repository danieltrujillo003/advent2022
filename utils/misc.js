export const getRandomFrom = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

export const sumArrayValues = (array) => {
  return array.reduce((acc, value) => acc += value, 0)
}