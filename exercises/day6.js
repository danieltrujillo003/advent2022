import fs from 'fs'
const values = fs.readFileSync('./data/day6.txt').toString()

export const getData = () => {
  return values.split('')
}

export const getMarker = (data, segmentSize) => {
  let segment = []
  let markerIndex
  let key
  for (let index = 0; index < data.length; index++) {
    segment.push(data[index])

    if (segment.length === segmentSize) {
      const hasRepeated = segment.some((qChar, i) => {
        key = segment.indexOf(qChar)
        return segment.lastIndexOf(qChar) !== i
      })

      if (!hasRepeated) {
        markerIndex = index
        break
      }

      segment = segment.slice(key+1)
    }
  }

  return markerIndex + 1
}
