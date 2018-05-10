const _ = require('lodash')
const Chance = require('chance')

const chance = new Chance()

function generateData () {
  let data = {}

  const n = chance.integer({ min: 8, max: 16 })
  data.builds = _.times(n, () => {
    return {
      name: chance.hash({ length: 10 }),
      lastRun: chance.date({ year: 2018 }).toISOString()
    }
  })

  data.builds.forEach(element => {
    const n = chance.integer({ min: 8, max: 16 })
    const runs = _.times(n, () => {
      const totalCount = chance.integer({ min: 100, max: 2000 })
      const total = chance.floating({ fixed: 2, min: 1, max: 7 })
      const slowest = chance.floating({ fixed: 2, min: total * 0.75, max: total })
      const fastest = chance.floating({ fixed: 2, min: 0.001, max: total * 0.25 })
      const avg = chance.floating({ fixed: 2, min: fastest, max: slowest })
      const ninef = chance.floating({ fixed: 2, min: Math.max(avg, slowest * 0.75), max: slowest })
      const rps = chance.integer({ min: 1000, max: 100000 })

      const nb = chance.integer({ min: 5, max: 9 })
      let count = 0
      const histogram = _.times(nb, () => {
        const bucketCount = chance.integer({ min: 0, max: totalCount - count })
        count = count + bucketCount
        return {
          Mark: chance.floating({ fixed: 2, min: fastest, max: slowest }),
          Count: bucketCount,
          Frequency: bucketCount / totalCount
        }
      })

      return {
        id: chance.hash({ length: 10 }),
        createdAt: chance.date({ year: 2018 }).toISOString(),
        summary: {
          Count: totalCount,
          Total: total,
          Slowest: slowest,
          Fastest: fastest,
          Average: avg,
          NineFive: ninef,
          Rps: rps
        },
        histogram
      }
    })

    element.runs = _.orderBy(runs, r => r.createdAt)

    const latencies = _.map(element.runs, r => {
      return {
        Date: r.createdAt,
        Average: r.summary.Average,
        NineFive: r.summary.NineFive
      }
    })

    element.latencies = latencies
  })

  return data
}

module.exports = {
  generateData
}
