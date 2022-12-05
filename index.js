import { getElvesFromData, getMostCaloriesElf, getTopMostCalories } from './exercises/day1.js'
import { getRoundsFromData, getFinalScoreWithChoices, getFinalScoreWithResults } from './exercises/day2.js'
import { getRucksacksFromData, getTotalPriority, getBadgesPriority } from './exercises/day3.js'
import { getPairsFromData, getTotalOverlapped, getTotalOrPatialOverlapped } from './exercises/day4.js'
import { resolveSteps, getTopCrates } from './exercises/day5.js'
import { divider, dayHeader, logAnswer } from './utils/logs.js'

dayHeader(1)
const mostCaloriesElf = getMostCaloriesElf(getElvesFromData())
const TopThreeMostCalories = getTopMostCalories(getElvesFromData(), 3)
logAnswer('The elf with most calories has', mostCaloriesElf.mostCalories)
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

dayHeader(4)
const totalOverlapped = getTotalOverlapped(getPairsFromData())
const totalOrPatialOverlapped = getTotalOrPatialOverlapped(getPairsFromData())
logAnswer('The number of areas fully contained within the other is', totalOverlapped)
logAnswer('The sum of areas tthat fully or partially overlap with their pairs are', totalOrPatialOverlapped)
divider()

dayHeader(5)
const topCratesCrane9000 = getTopCrates(resolveSteps('9000'))
const topCratesCrane9001 = getTopCrates(resolveSteps('9001'))
logAnswer('The top crates if rearranged with the CrateMover 9000 are', topCratesCrane9000)
logAnswer('The top crates if rearranged with the CrateMover 9001 are', topCratesCrane9001)
divider()
