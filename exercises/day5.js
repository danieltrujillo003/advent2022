import fs from 'fs'
const values = fs.readFileSync('./data/day5.txt').toString()

export const getDataLines = (start = 0, end = 0) => {
  const dataArray = values.split('\n')
  return end ? dataArray.slice(start, end) : dataArray.slice(start)
}

export const getInitialPiles = (data) => {
  return data.reduce((acc, line) => {
    line.split('').forEach((crate, i) => {
      if (/[A-Z]/.test(crate)) {
        acc[(i - 1) / 4].unshift(crate)
      }
    })
    return acc
  }, [[], [], [], [], [], [], [], [], []]);
}

export const resolveSteps = (model) => {
  const data = getDataLines(10)
  const piles = getInitialPiles(getDataLines(0, 8))
  const numericSteps = data.map((line) => {
    return line.split(' ').filter(word => /[0-9]/.test(word))
  })

  numericSteps.forEach(step => {
    if (model === '9000') {
      let counter = 0
      while (counter < step[0]) {
        piles[step[2]-1].push(piles[step[1]-1].pop())
        counter++
      }
    } else if (model === '9001') {
      const assaultedPile = piles[step[1]-1].splice(-step[0])
      piles[step[2]-1] = piles[step[2]-1].concat(assaultedPile)
    }
  })

  return piles
}

export const getTopCrates = (finalPiles) => {
  return finalPiles.reduce((acc, pile) => {
    return acc + pile.pop()
  }, '')
}

console.log(getTopCrates(resolveSteps('9001')))