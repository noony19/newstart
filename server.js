const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NzM0MDQ0NDg5MjQwMjgxMTEw.XxL-Og.6Dxv4OirYW6sbR-sCkmF8s68mvU');
