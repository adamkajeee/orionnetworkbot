const Discord = require('discord.js');
const prefix = '/';


exports.run = async (client, message, args) => {
    if(message.content.startsWith(prefix + "embedsay")){
    let msg = (message.content.split(' ').slice(1).join(' '));
    if (!msg) return message.channel.send("<a:anyad:667805471100633088> **Adj meg egy üzenetet!**")
            let embed = new Discord.RichEmbed()
            .setColor('#b342f5')
            .setDescription(`${msg}`, '_ _')
            .setFooter(`OrionNetwork - /embedsay | Kérte: ${message.author.tag}`, client.user.avatarURL)
            message.delete().catch();
            message.channel.send(embed).catch(_ => { })
}
};