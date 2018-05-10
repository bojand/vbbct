const TestApp = require('./app')
async function main () {
  const app = global.app = new TestApp()

  await app.start()
}

main()
