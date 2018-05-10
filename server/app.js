const HttpApp = require('./http')

class TestApp {
  constructor (config, log) {
    this.http = new HttpApp(this.config, this.log)

    // shutdown handlers
    process.on('SIGINT', () => { this.shutdown() })
    process.on('SIGTERM', () => { this.shutdown() })
  }

  async start () {
    return this.http.start()
  }

  async stop () {
    if (this.http) await this.http.close()
  }

  async shutdown () {
    await this.stop()
    process.exit(0)
  }
}

module.exports = TestApp
