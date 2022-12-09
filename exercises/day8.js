import fs from 'fs'
const values = fs.readFileSync('./data/day8.txt').toString()

export const getTreesFromData = () => {
  return values.split('\n')
}

export const positionOfFirstGte = (array, value) => {
  return array.reduce((acc, t, i) => {
    if (t >= value) {
      acc = i + 1
      value = 99
    }

    return acc
  }, array.length)
}

export const getVisibleTrees = (data) => {
  return data.reduce((acc, line, index) => {
    const treeLine = line.split('')
    const treeColumns = []

    treeLine.forEach((tree, i) => {
      if (!treeColumns[i]) {
        treeColumns[i] = data.map((_, ln) => data[ln][i])
      }

      const fromLeft = !treeLine.slice(0, i).some(t => t >= tree)
      const fromRight = !treeLine.slice(i + 1).some(t => t >= tree)
      const fromTop = !treeColumns[i].slice(0, index).some(t => t >= tree)
      const fromBottom = !treeColumns[i].slice(index + 1).some(t => t >= tree)

      if (fromTop || fromBottom || fromLeft || fromRight) {
        const coordinates = `${index},${i}`
        acc.add(coordinates)
      }
    })

    return acc
  }, new Set()).size
}

export const getHighestScenicScore = (data) => {
  return data.reduce((acc, line, index) => {
    const treeLine = line.split('')
    const treeColumns = []

    treeLine.forEach((tree, i) => {
      if (!treeColumns[i]) {
        treeColumns[i] = data.map((_, ln) => data[ln][i])
      }

      const scoreLeft = positionOfFirstGte(treeLine.slice(0, i).reverse(), tree) || 1
      const scoreRight = positionOfFirstGte(treeLine.slice(i + 1), tree) || 1
      const scoreTop = positionOfFirstGte(treeColumns[i].slice(0, index).reverse(), tree) || 1
      const scoreBottom = positionOfFirstGte(treeColumns[i].slice(index + 1), tree) || 1

      const totalScore = scoreTop * scoreRight * scoreBottom * scoreLeft
      if (totalScore > acc) acc = totalScore
    })

    return acc
  }, 0)
}
