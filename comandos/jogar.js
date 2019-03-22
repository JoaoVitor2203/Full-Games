const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
        if(!message.member.roles.some(r=>["Fundador"].includes(r.name)) ) return message.channel.send('Você não tem permissão para executar este comando! Voce precisa ter a tag @Fundador para poder dizer oq eu devo jogar') 
        let stats = args.join(" ");
        if(!stats) return message.channel.send("o que quer que eu jogue? utilize $$jogar ``jogo``");
        client.user.setActivity(stats, {type: "PLAYING"});
        message.channel.send(`:video_game: Agora estou jogando ${stats}`)
}


module.exports.help = {
    name: "jogar"
    }