const fastify = require('fastify')
const sensiblePlugins = require('fastify-sensible')

const routes = require('./routes')

class HttpApp {
  constructor (config, log) {
    // logger setup sets up request id
    this.fastify = fastify({
      logger: true
    })

    this.fastify.register(sensiblePlugins)

    this.fastify.register(require('fastify-blipp'))

    this.fastify.register(routes)
  }

  async start () {
    const address = '0.0.0.0' // listen on 0.0.0.0 for container support
    const port = 3000
    await this.fastify.listen(port, address)

    this.fastify.blipp()
  }

  async close () {
    return this.fastify.close()
  }
}

module.exports = HttpApp
