async function register (fastify, opts) {
  fastify.register(require('./builds'), { prefix: '/builds' })
}

module.exports = register
