var PrincessPoopanBot = require('../src/princesspoopanbot')

var princesspoopanbot = new PrincessPoopanBot({
  token: process.argv[2],
  name: 'princesspoopanbot'
})

princesspoopanbot.run()
