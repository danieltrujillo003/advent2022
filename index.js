import { getElvesFromData, getMostCaloriesElf, getTopMostCalories } from './exercises/day1.js'
import { getRoundsFromData, getFinalScoreWithChoices, getFinalScoreWithResults } from './exercises/day2.js'
import { getRucksacksFromData, getTotalPriority, getBadgesPriority } from './exercises/day3.js'
import { getPairsFromData, getTotalOverlapped, getTotalOrPatialOverlapped } from './exercises/day4.js'
import { resolveSteps, getTopCrates } from './exercises/day5.js'
import { getData, getMarker } from './exercises/day6.js'
import { getTreesFromData, getVisibleTrees, getHighestScenicScore } from './exercises/day8.js'
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

dayHeader(6)
const packetMarker = getMarker(getData(), 4)
const messageMarker = getMarker(getData(), 14)
logAnswer('The packet marker after 4 different character is', packetMarker)
logAnswer('The message marker after 14 different character is', messageMarker)
divider()

dayHeader(7)
// TODO
divider()

dayHeader(8)
const visibleTrees = getVisibleTrees(getTreesFromData())
const highestScenicScore = getHighestScenicScore(getTreesFromData())
logAnswer('The total number of visible trees is', visibleTrees)
logAnswer('The highest scenic score of any tree is', highestScenicScore)
divider()
