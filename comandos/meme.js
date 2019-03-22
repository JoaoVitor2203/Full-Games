const Discord = require("discord.js");
var randomPuppy = require("random-puppy")

exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{});

  randomPuppy('memes')
.then(url => {
    var memeEmbed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle('**Meme entregue: **')
        .setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)
        .setTimestamp()
        .setImage(url)
        .setColor('RANDOM')
    message.channel.send(memeEmbed);
});
}

module.exports.help = {
    name: "meme"
    }