const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args) => {
    let felh = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!felh) return message.channel.send("<a:anyad:667805471100633088> **Nem találom a felhasználót!**");
    let indok = args.join(" ").slice(22);
    if (!indok) return message.channel.send("<a:anyad:667805471100633088> **Adj meg egy indokot!**")
    let szoba = message.guild.channels.find(c => c.name === "【💂】admin-report");
    if (!szoba) return message.channel.send(`<a:anyad:667805471100633088>**Nem találom a report szobát! Kérlek hozz létre egy __"report"__ nevezetű szobát!**`);

    let report = new Discord.RichEmbed()
     report.setTitle("Bejelentés")
     report.setColor("#b342f5")
     report.addField("Bejelentett felhasználó", felh)
     report.addField("Bejelentette", message.author)
     report.addField("Ebben a szobában", message.channel.name)
     report.addField("Indok", indok);
     report.setFooter(`OrionNetwork - /report | Kérte: ${message.author.tag}`, client.user.avatarURL)


    message.delete().catch(O_o=>{});
    szoba.send(report);
};