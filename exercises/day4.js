import fs from 'fs'
const values = fs.readFileSync('./data/day4.txt').toString()

export const getPairsFromData = () => {
  return values.split('\n')
}

export const numberWithinRange = (range, number, equal = true) => {
  const [init, end] = range
  return equal ? number >= init && number <= end : number > init && number < end
}

export const getTotalOverlapped = (pairs) => {
  return pairs.reduce((acc, pair) => {
    const area1 = pair.split(',')[0].split('-').map(Number)
    const area2 = pair.split(',')[1].split('-').map(Number)
    if (numberWithinRange(area1, area2[0]) && numberWithinRange(area1, area2[1])) {
      return acc + 1
    }
    if (numberWithinRange(area2, area1[0]) && numberWithinRange(area2, area1[1])) {
      return acc + 1
    }
    return acc
  }, 0)
}

export const getTotalOrPatialOverlapped = (pairs) => {
  return pairs.reduce((acc, pair) => {
    const area1 = pair.split(',')[0].split('-').map(Number)
    const area2 = pair.split(',')[1].split('-').map(Number)
    if (numberWithinRange(area1, area2[0]) || numberWithinRange(area1, area2[1])) {
      return acc + 1
    }
    if (numberWithinRange(area2, area1[0]) || numberWithinRange(area2, area1[1])) {
      return acc + 1
    }
    return acc
  }, 0)
}
