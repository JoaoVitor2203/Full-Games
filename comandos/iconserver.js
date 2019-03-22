const { RichEmbed } = require("discord.js");

module.exports.run = async (client, message) => {

    let nyfofo = message.guild.iconURL || "https://loritta.website/assets/img/unknown.png";
    let nylindo = new RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("BLACK")
    .setImage(`${nyfofo}${message.guild.iconURL ? "?size=2048" : ""}`)
    .setFooter(message.guild.name, message.guild.iconURL)
    .setTimestamp();
    message.channel.send(nylindo);
};

module.exports.help = {
    name: "iconserver"
}