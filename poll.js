const Discord = require("discord.js")
const prefix = "/"

exports.run = async (client, message, args, tools) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("<a:anyad:667805471100633088> **Ehhez nincs jogod! Szükséges jog: __KICK_MEMBERS__**")
    if(!args[0]) return message.channel.send("<a:anyad:667805471100633088> **Kérlek adj meg egy szöveget!**")
    let embed = new Discord.RichEmbed()
    .setTitle(`Szavazást létrehozta: ${message.author.username}`)
    .setColor("#fcfffe")
    .setDescription(args.join(' '))
    .setFooter(`OrionNetwork - /poll | Kérte: ${message.author.tag}`, client.user.avatarURL)

    let msg = await message.channel.send(embed)

    await msg.react("✅")
    await msg.react("❌")

    message.delete({timeout: 1000});
}