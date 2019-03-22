const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (message.mentions.users.size  == 0) return message.reply('Mencione alguem')
if (!args.slice(1).join(' ')) return message.reply('Diga o motivo da denuncia! use $$denuncia (@usuario) (motivo)')
var canal = message.guild.channels.find("name", "denuncia");
if (!canal) return;
canal.send({embed:{
    'title':'Denuncias 🍭',
    'description':args.slice(1).join(' '),
    'thumbnail':{
        'url':message.mentions.users.first().avatarURL
    }
    ,'footer':{
        'text':'Denuncia enviada por: ' + message.author.tag
    },
    'color':message.member.displayColor
}})
message.reply('🍭 **| Obrigado por denunciar o Usuario, iremos conferir sua denuncia!')
}

module.exports.config = {name: "denuncia"}