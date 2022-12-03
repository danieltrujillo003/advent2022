import fs  from 'fs'
const values = fs.readFileSync('./data/day2.txt').toString()

const matchups = {
  X: {
    A: 'draw',
    B: 'lose',
    C: 'win',
    value: 1
  },
  Y: {
    A: 'win',
    B: 'draw',
    C: 'lose',
    value: 2
  },
  Z: {
    A: 'lose',
    B: 'win',
    C: 'draw',
    value: 3
  }
}

const expectedResults = {
  X: 'lose',
  Y: 'draw',
  Z: 'win'
}

const resultPoints = {
  win: 6,
  draw: 3,
  lose: 0
}

export const getRoundsFromData = () => {
  return values.split('\n')
}

export const getFinalScoreWithChoices = (rounds) => {
  const scoresArray = rounds.reduce((acc, round) => {
    const home = round[2]
    const away = round[0]
    const result = matchups[home][away]

    acc.push(resultPoints[result] + matchups[home].value)
    return acc
  }, [])

  return scoresArray.reduce((acc, score) => acc += score, 0)
}

export const getFinalScoreWithResults = (rounds) => {
  const scoresArray = rounds.reduce((acc, round) => {
    const away = round[0]
    const result = expectedResults[round[2]]
    const matchupsArray = Object.values(matchups)
    const choicePoints = matchupsArray.find(elem => elem[away] === result).value

    acc.push(resultPoints[result] + choicePoints)
    return acc
  }, [])

  return scoresArray.reduce((acc, score) => acc += score, 0)
}
