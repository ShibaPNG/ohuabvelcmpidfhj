const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  var whitelist = ["red","orange","yellow","green","cyan","blue","purple","magenta","pink"]

  let rMember = message.member;
  let role = args.join(" ").slice().toLowerCase();
  if(!role)
    return message.channel.send("Error: 0");
  if(!whitelist.includes(role))
    return message.channel.send("Invalid role!");
  let gRole = message.guild.roles.find(val => val.name.toLowerCase() == role);
  if(!gRole)
    return message.channel.send("Error: 1")

  if(rMember.roles.has(gRole.id)) // They don't have the specified role.
    return message.channel.send("You already have this role.");

  rMember.addRole(gRole.id);

  message.channel.send(`<@${rMember.id}> you've been given: ${gRole.name}.`)

}

module.exports.help = {
  name: "add"
}
