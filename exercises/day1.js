import fs from 'fs'
const values = fs.readFileSync('./data/day1.txt').toString()

export const getElvesFromData = () => {
  return values.split('\n\n')
}

export const getMostCaloriesElf = (elves) => {
  return elves.reduce((acc, elf, index) => {
    const splittedElf = elf.split('\n')
    let actualCalories = 0
    splittedElf.forEach(elem => actualCalories += Number(elem))

    return actualCalories > acc.mostCalories ? { mostCalories: actualCalories, index } : acc
  }, {mostCalories: 0, index: 0})
}

export const getTopMostCalories = (elves, top) => {
  let topSum = 0
  let n = 0

  while (n < top) {
    let elf = getMostCaloriesElf(elves)
    topSum += elf.mostCalories
    elves.splice(elf.index, 1)
    n++
  }

  return topSum
}
