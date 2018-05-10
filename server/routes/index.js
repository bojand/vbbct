async function register (fastify, opts) {
  fastify.register(require('./api/'), { prefix: '/api' })
}

module.exports = register
