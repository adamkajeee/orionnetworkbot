const Discord = require("discord.js")

module.exports.run = async (client, message, args, ops) => {
    let embed = new Discord.RichEmbed()
    .setColor("#b342f5")
    .setTitle("Parancsaim:")
    .addField("Admin:", "`/kick,\n/ban,\n/report,\n/poll`")
    .addField("Fun:", "`/coinflip,\n/say,\n/embedsay`")
    try{
        message.author.send(embed)
        message.channel.send(`<a:szar:667805460509884435> **Privátban elküldtem a parancsokat ${message.author}!**`)
    }
    catch(e){

    }
}