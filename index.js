const Discord = require("discord.js")
const client = new Discord.Client()
const privat = require("./privat.json")
const prefix = "/"
const { config } = require("dotenv")
const ownerID = "360425736688893954"

config({
    path: __dirname + "/.env"
})

client.on("ready", () => {
    console.log(`Beléptem a ${client.user.tag} botba!`)
    client.user.setPresence({game : { name : `Fejlesztés alatt!`, type: "WATCHING"}, status: "dnd"})
})
client.on("message", async message => {

    if (message.author.bot) return;
    if(message.content.indexOf(privat.prefix) !== 0) return;

    const args = message.content.slice(privat.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const ops = {
      ownerID: ownerID
    }

    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args, ops);
    } catch (err) {
    }

  });
client.on("guildMemberAdd", async member => {
    let welcomechannel = member.guild.channels.find(c => c.name === "【👋】belépések")
    let embed = new Discord.RichEmbed()
    .setTitle("Csatlakozás:")
    .setColor("#ff2a00")
    .addField(`Üdv a szerveren ${member.user.username}, érezd jól magad!`, "_ _")
    .setTimestamp()
    .setFooter(`ReapNetworkBOT - Csatlakozás`, client.user.avatarURL)
    welcomechannel.send(embed)
  })
client.on("guildMemberRemove", async member => {
    let leavechannel = member.guild.channels.find(c => c.name === "【👋】kilépések")
    let embed = new Discord.RichEmbed()
    .setTitle("Kilépés:")
    .setColor("#ff2a00")
    .addField(`Viszlát ${member.user.username}!`, "_ _")
    .setTimestamp()
    .setFooter(`ReapNetworkBOT - Kilépés`, client.user.avatarURL)
    leavechannel.send(embed)
  })
client.login(process.env.TOKEN)
//#ff2a00
