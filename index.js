import { getElvesFromData, getMostCaloriesElf, getTopMostCalories } from './exercises/day1.js'
import { getRoundsFromData, getFinalScoreWithChoices, getFinalScoreWithResults } from './exercises/day2.js'
import { getRucksacksFromData, getTotalPriority, getBadgesPriority } from './exercises/day3.js'
import { divider, dayHeader, logAnswer } from './utils/logs.js'

dayHeader(1)
const mostCaloriesElf = getMostCaloriesElf(getElvesFromData())
const TopThreeMostCalories = getTopMostCalories(getElvesFromData(), 3)
logAnswer('The elf with most calories has', mostCaloriesElf.index)
logAnswer('The total calories sum of the top three elves is', TopThreeMostCalories)
divider()

dayHeader(2)
const finalScoreWithChoices = getFinalScoreWithChoices(getRoundsFromData())
const finalScoreWithResults = getFinalScoreWithResults(getRoundsFromData())
logAnswer('The final score assuming the second column is choice is', finalScoreWithChoices)
logAnswer('The final score assuming the second column is result is', finalScoreWithResults)
divider()

dayHeader(3)
const totalPriority = getTotalPriority(getRucksacksFromData())
const badgesPriority = getBadgesPriority(getRucksacksFromData())
logAnswer('The total priority of the common item is', totalPriority)
logAnswer('The priority of all the badges is', badgesPriority)
divider()
