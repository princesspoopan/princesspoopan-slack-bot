'use strict'

var util = require('util')
var Bot = require('slackbots')

const interviewScript = {
  'tw': 'join 2 years ago, as full stack web engineer -> wasn\'t launched, TMS, user internally  -> build main features -> a year after -> ' +
  'product launched, PMS + Chat, customer world-wide',
  'twl': 'as team lead, look overall of product in term of improvement and maintenance, working closely with design team to solve customers what the customers really need' +
  'co-ordinate with the customer support team to help identify customers problem',
  'dcp': 'the company value creative idea, open-minded and everybody\'s is important and always challenging',
  'sp': 'I am committed with what I do, I put my passion above everything. To see the result of what I do always give me the great feeling',
  'wp': 'Sometimes for me it is hard to back down when I am into deep with something, sometimes it is better to step back and re-think it ' +
  'I always have people around me to pull me back or knock me out when I needed it',
  'ts': 'react reflux -> redux build tool: browserify -> webpack, nodejs express mongodb socketjs, karma jest selenium circle ci'
}

var PrincessPoopanBot = function Constructor(settings) {
    this.settings = settings
    this.settings.name = this.settings.name || 'princesspoopanbot'

    this.user = null
}

PrincessPoopanBot.prototype.run = function () {
    PrincessPoopanBot.super_.call(this, this.settings)

    this.on('start', this._onStart)
    this.on('message', this._onMessage)
}

PrincessPoopanBot.prototype._onStart = function () {
    this._loadBotUser()
    this._showWelcomeMessage()
}

PrincessPoopanBot.prototype._onMessage = function (originalMessage) {
  var channel = this._getChannelById(originalMessage.channel)
  // console.log('this.user', this.user)
  const script = interviewScript[originalMessage.text]
  if (originalMessage.type === 'message'
    && originalMessage.user !== this.user.id
    && script
  ) {
    this.postMessageToChannel(
      channel.name,
      script,
      { as_user: true }
    )
  }
}

PrincessPoopanBot.prototype._loadBotUser = function () {
    var self = this
    this.user = this.users.filter(function (user) {
        return user.name === self.name
    })[0]
}

PrincessPoopanBot.prototype._showWelcomeMessage = function () {
  this.postMessageToChannel(
    this.channels[0].name,
    'Hello, this is @princesspoopanbot'
  )
}

PrincessPoopanBot.prototype._getChannelById = function (channelId) {
    return this.channels.filter(function (item) {
        return item.id === channelId
    })[0]
}

// inherits methods and properties from the Bot constructor
util.inherits(PrincessPoopanBot, Bot)

module.exports = PrincessPoopanBot
