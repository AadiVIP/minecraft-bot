const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Bot is running!'))
app.listen(3000, () => console.log('Web server is online'))

const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'nhg1.aternos.me',  // Replace with your Minecraft server IP
  port: 63145,         // Change if your server uses a different port
  username: 'RoyalStag', // Bot username (change it if you want)
  version: '1.20.1'       // Auto-detects server version
})

bot.on('spawn', () => {
  console.log('Bot has joined the server.')
  bot.chat('Hello, I am FakeBot!')
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return // Ignore its own messages
  bot.chat(`You said: ${message}`)
})

bot.on('error', err => console.log('Error: ', err))
bot.on('end', () => console.log('Bot has been disconnected'))
