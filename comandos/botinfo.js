const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR")

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription(":robot: Informação do Bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField(":ticket: Nome do Bot", bot.user.username)
    .addField(":date: Criado em", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}