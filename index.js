const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();

bot.on("ready", async () => {
    console.log(`Bot foi iniciado, com ${bot.users.size} usuários, em ${bot.channels.size} canais, em ${bot.guilds.size} servidores`);
  
     bot.user.setActivity('Criado Por:!                     (๖ۣۜJ)oão合#5943, </Vitoor>#5556', {type: "STREAMING"}); //bot
  
  });

  bot.on('message', async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(botconfig.prefix)) return; 

    const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    try{

        let commandFile = require(`./comandos/${comando}.js`)
        commandFile.run(bot, message, args);

    } catch(e){
        console.log(e.stack);
    }});

    bot.on('ready', () => { //muitos usam client, mas aqui está bot.
        let tt = [
             //Watching = Assistindo, Playing = Jogando, Streaming = Transmitindo, Listening = Ouvindo
            { name: `Novos Membros No Servidor Full Games`, type: 'WATCHING'},
            { name: `Defesa 100% 💣📌`, type: 'STREAMING'},
            { name: `Amor no ar💖`, type: 'PLAYING'},
            { name: `Meu Criador:!                     (๖ۣۜJ)oão合#5943, </Vitoor>#5556`, type: 'LISTENING'},
            { name: `Estou  em ${bot.guilds.size} servidor(es)`},
            { name: `Estou me divertindo com ${bot.users.size} usuários`}
           //sempre use a vírgula ao trocar de status
        ];
        function st() {
            let rs = tt[Math.floor(Math.random() * tt.length)];
            bot.user.setPresence({ game: rs });
        }
        st();
        setInterval(() => st(), 10000); //1000 = 1 segundo, 5000 = 5 segundos, 6700 = 6,7 segundos, 10000 = 10 segundos.
    });
    
    bot.login("NTUyNjQ4OTA4Mjg4MDMyNzY4.D22hng.zuHjTpZdstu-Qjairg_9piFK_ns");