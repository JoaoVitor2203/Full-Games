const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    let sugestao = args.join(" ");
    if (!sugestao) return message.reply("insira sua sugestão.")

    let embed = new Discord.RichEmbed()
        .setColor("#0051FF")
        .addField("**Sugestão**", `${sugestao}`)
        .setFooter(`Sugestão enviada por: ${message.author.tag}`, `${message.author.avatarURL}`)
        .setTimestamp(new Date())

    let canal = message.guild.channels.find(canal => canal.name === "『🔰』彡ѕυgeѕтões");
    if (!canal) return message.reply("não existe nenhum canal para enviar a sua sugestão.");

    message.delete();
    canal.send(embed).then(msg => msg.react("👍").then(r => msg.react("👎")));
    message.reply(`sua sugestão foi enviada com sucesso!`);
}

module.exports.help = {
    name: "sugestao"
}