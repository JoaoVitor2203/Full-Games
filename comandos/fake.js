const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    message.delete()
    try {
let user;

if (message.mentions.users.first()) {
  user = message.mentions.users.first();
  
} else if(args[0]) {
    user = client.users.get(args[0]);

}
let botmessage = args.slice(1).join(' ')

if (args[0] == null) {return message.channel.send(`${message.author}, <:Shiina:558434189712687115> **Mencione um usuário !**`)}


if (args[1] == null) {return message.channel.send(`${message.author}, <:Shiina:558434189712687115> **Diga algo !**`)}
message.channel.createWebhook(user.username, user.avatarURL).then(w => {
    w.send(botmessage);
    w.delete();
})

} catch (err) {
message.reply('<:Shiina:558434189712687115> **Eu não tenho permissão para criar um Webhook neste servidor, ou não encontrei este usuário.**')
}
}

module.exports.help = {
    name: "fake"
}