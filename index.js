const { getElvesFromData, getMostCaloriesElf, getTopMostCalories } = require('./exercises/day1')

console.log('-> DAY 1')
const mostCaloriesElf = getMostCaloriesElf(getElvesFromData())
const TopThreeMostCalories = getTopMostCalories(getElvesFromData(), 3)
console.log(`The elf with most calories is number ${mostCaloriesElf.index} wit a total of ${mostCaloriesElf.mostCalories} calories.`)
console.log(`The total sum of the top three elves is ${TopThreeMostCalories} calories.`)
console.log('------------------------------')
