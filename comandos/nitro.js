const Discord = require("discord.js");
var Jimp = require('jimp');


exports.run = async (client, message, args) => {
    message.delete().catch(O_o=>{});
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`:timer: | Fotografando para o discord nitro!`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=nitro&url=https://api.eggsybot.xyz/pub/resources/frames/nitro.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
};

exports.help = {
    name: "nitro"
};