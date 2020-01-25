const Discord = require('discord.js');

exports.run = async (client, message, args) => {
      let random = (Math.floor(Math.random() * Math.floor(2)));
      if (random === 0) {
      let fej1 = new Discord.RichEmbed()
      fej1.setTitle("Végeredmény:");
      fej1.addField("írás", "_ _")
        fej1.setFooter("Fej vagy írás?")
        fej1.setTimestamp();
      message.channel.send(fej1)
    }
      else {
        let iras1 = new Discord.RichEmbed()
        iras1.setTitle("Végeredmény:");
        iras1.addField("írás", "_ _")
        iras1.setFooter("Fej vagy írás?")
        iras1.setTimestamp();
      message.channel.send(iras1)
 }
};