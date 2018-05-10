const fp = require('fastify-plugin')

const BuildsService = require('./service')

module.exports = async function (fastify, opts) {
  // register the greeter service for business logic
  fastify.register(fp(async function (fastify, opts) {
    const service = new BuildsService()
    fastify.decorate('service', service)
  }))

  // Finally we're registering out routes
  fastify.register(registerRoutes)
}

async function registerRoutes (fastify, opts) {
  // extract the useful objects
  const { service } = fastify

  fastify.get('/',
    async function (request, reply) {
      const builds = await service.list()

      return builds
    })

  fastify.get('/:name',
    async function (request, reply) {
      const { name } = request.params
      const info = await service.get(name)

      return info
    })

  fastify.get('/:name/runs',
    async function (request, reply) {
      const { name } = request.params
      const runs = await service.listRuns(name)

      return runs
    })

  fastify.get('/:name/latencies',
    async function (request, reply) {
      const { name } = request.params
      const latencies = await service.listLatencies(name)

      return latencies
    })

  fastify.get('/:name/runs/:id',
    async function (request, reply) {
      const { name, id } = request.params
      const run = await service.getRun(name, id)

      return run
    })

  fastify.get('/:name/runs/:id/histogram',
    async function (request, reply) {
      const { name, id } = request.params
      const histogram = await service.getHistogram(name, id)

      return histogram
    })
}
