const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let pessoa = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let avatar = pessoa.displayAvatarURL
    if (avatar.endsWith(".gif")) {
      avatar = `${pessoa.displayAvatarURL}?size=2048`
    }
    message.channel.send({embed: {
      title: `${pessoa.tag}`,
      description: `[:inbox_tray: Link Direto, Para Baixar A Imagem](${avatar})`,
      image: {url: `${avatar}`},
      color: 0X660066
    }})
};

exports.help = {
    name: "avatar"
};