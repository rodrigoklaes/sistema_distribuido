require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api')
const TOKEN = process.env.BOT_TOKEN
const bot = new TelegramBot(TOKEN, { polling: true })

const { action } = require('./actions')

bot.on('message', (msg) => {
  console.log('oi')

  action(msg)
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(msg.chat.id, 'Received your message')
})

// bot.sendMessage('644711950', 'Enviando mensagem')

module.exports = bot
