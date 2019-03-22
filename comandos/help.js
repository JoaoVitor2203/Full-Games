const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    const embed = new Discord.RichEmbed()
    .setDescription("Meu Prefixo É ``$$``")
    .setColor('#8c7c07')
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL)
    .addField('Moderação: ``ban``,``kick``,``anuncio``,``denuncia``,``ontime``')
    .addField('Miscelancia: |``abracar``|``atirar``|``avatar``|``beijar``|``botinfo``|``calculadora``|``cat``|``clear``|``corrida``|``cry``|``dog``|``iconserver``|``laranjo``|``mchead``|``mcskin``|``ping``|``serverinfo``|``ship``|``spotify``|``sugestao``|``meme``|``nitro``|')
    .setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)

    message.reply(embed)
};


exports.help = {
    name: "help"
};