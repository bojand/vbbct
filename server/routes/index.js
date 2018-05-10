const path = require('path')

async function register (fastify, opts) {
  fastify.register(require('fastify-static'), {
    root: path.resolve(process.cwd(), '../client/dist')
  })

  fastify.register(require('./api/'), { prefix: '/api' })
}

module.exports = register
