const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send ("<a:anyad:667805471100633088> **Ehhez nincs jogod! Szükséges jog: __MANAGE_MESSAGES__**")
      const uzenet = args.join(" ");
      if (!uzenet) return message.channel.send("<a:anyad:667805471100633088> **Adj meg egy üzenetet!**")
      message.delete().catch();
      message.channel.send(uzenet).catch(_ => { })
}
