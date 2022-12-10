import { sumArrayValues, numberWithinRange } from '../utils/misc.js'

import fs from 'fs'
const values = fs.readFileSync('./data/day10.txt').toString()

export const getInstructionsFromData = () => {
  return values.split('\n')
}

export const getSumOfStrengths = (data, returnArray) => {
  let x = 1
  let cyclesCount = 0
  let xArray = []

  const signalStrengths = data.reduce((acc, signal) => {
    const splittedInstruction = signal.split(' ')

    if (splittedInstruction[0] === 'noop') {
      cyclesCount++
      xArray.push('N')
    } else if (splittedInstruction[0] === 'addx') {
      cyclesCount += 2
      const multiplier = 20 + acc.length * 40

      cyclesCount >= multiplier && acc.push(x * multiplier)

      x += Number(splittedInstruction[1])
      xArray.push(x)
    }

    return acc
  }, [])

  return returnArray ? xArray : sumArrayValues(signalStrengths)
}

export const getCRTRender = (data) => {
  let image = ''

  data.forEach((x, i) => {
    const value = i !== 0 ? data.slice(0, i).reverse().find(n => Number.isInteger(n)) : 1

    if(Number.isInteger(x)) {
      numberWithinRange([value-1, value+1], image.length % 40) ? image += '#' : image += '.'
      numberWithinRange([value-1, value+1], image.length % 40) ? image += '#' : image += '.'
    } else {
      numberWithinRange([value-1, value+1], image.length % 40) ? image += '#' : image += '.'
    }
  })

  const copy = [...image.split('')]
  const line1 = copy.splice(0,40).join('')
  const line2 = copy.splice(0,40).join('')
  const line3 = copy.splice(0,40).join('')
  const line4 = copy.splice(0,40).join('')
  const line5 = copy.splice(0,40).join('')
  const line6 = copy.splice(0,40).join('')

  return [line1,line2,line3,line4,line5,line6].join('\n')
}
