const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {

let emojis = message.guild.emojis.map(e => e)
  let e = emojis.length
  if (e == 0) return message.channel.send(`**${message.author.username}**, O servidor **${message.guild.name}** não tem emojis personalizados.`)
  if (e > 51 ) {
    message.channel.send(`:no: | **${message.author.username}**, o servidor **${message.guild.name}** tem muito emoji para poder ser listado.`)
  } else {
    const eembed = new Discord.RichEmbed()
    .setColor('#ffffff')
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`Emojis do Servidor - ${message.guild.name}`, message.guild.iconURL)
    .setDescription(`${emojis}`)
    message.channel.send(eembed);
  }
}

  module.exports.help = {
    name: "emojis"
}