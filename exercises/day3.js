import { sumArrayValues } from '../utils/misc.js'

import fs from 'fs'
const values = fs.readFileSync('./data/day3.txt').toString()

export const getRucksacksFromData = () => {
  return values.split('\n')
}

export const convertAlpha = char => {
  const ascii = char.charCodeAt()
  const upperIdentifier = ascii < 91
  return upperIdentifier ? ascii - 38 : ascii - 96
}

export const getTotalPriority = (rucksacks) => {
  const prioritiesArray = rucksacks.map(rucksack => {
    const half = rucksack.length / 2
    const pocket1 = rucksack.slice(0, half).split('')
    const pocket2 = rucksack.slice(half)
    const commonItem = pocket1.find(item => pocket2.includes(item))

    return convertAlpha(commonItem)
  })

  return sumArrayValues(prioritiesArray)
}

export const getBadgesPriority = (rucksacks) => {
  const groups = rucksacks.reduce((acc, _, index) => {
    if (index % 3 === 0) {
      const group = []
      group.push(
        rucksacks[index],
        rucksacks[index+1],
        rucksacks[index+2]
      )
      acc.push(group)
    }

    return acc
  }, [])

  const badgesArray = groups.map(group => {
    group.sort((a, b) => a.length - b.length)
    for (let letter of group[0]) {
      if (group[1].includes(letter) && group[2].includes(letter)) return convertAlpha(letter)
    }
  }, [])

  return sumArrayValues(badgesArray)
}
