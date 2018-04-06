const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  let bembed = new Discord.RichEmbed()
  .setColor("#41f44c")
  .setDescription('\nTo add a role type:\n`connie.add rolename`\nTo remove a role type:\n`connie.del rolename`\n\n**Current Roles:**\n\n▪Red\n▪Orange\n▪Yellow\n▪Green\n▪Cyan\n▪Blue\n▪Magenta\n▪Pink')
  .setTitle('Role Information')
  return message.channel.send(bembed);
}

module.exports.help = {
  name: "roles"
}
