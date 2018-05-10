const _ = require('lodash')

const { generateData } = require('./data')

class BuildsService {
  constructor () {
    this.data = generateData()
  }

  async list () {
    return _.map(this.data.builds, b => {
      return _.pick(b, ['name', 'lastRun'])
    })
  }

  async get (name) {
    const build = _.find(this.data.builds, { name })
    return _.pick(build, ['name', 'lastRun'])
  }

  async listRuns (name) {
    const build = _.find(this.data.builds, { name })
    const runs = _.get(build, 'runs', [])
    return _.map(runs, r => {
      return _.pick(r, ['id', 'createdAt', 'summary'])
    })
  }

  async getRun (name, id) {
    const build = _.find(this.data.builds, { name })
    const runs = _.get(build, 'runs', [])
    const run = _.find(runs, { id })
    return _.pick(run, ['id', 'createdAt', 'summary'])
  }

  async listLatencies (name) {
    const build = _.find(this.data.builds, { name })
    return _.get(build, 'latencies', [])
  }

  async getHistogram (name, id) {
    const build = _.find(this.data.builds, { name })
    const runs = _.get(build, 'runs', [])
    const run = _.find(runs, { id })
    return _.get(run, 'histogram', [])
  }
}

module.exports = BuildsService
