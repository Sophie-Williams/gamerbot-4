const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("Ready !", function() {
    bot.user.setGame("[PtuxsxmxkBot] p!help",type, 0);
    console.log("Bot Ready !");
});

bot.login("NDc1OTY4NjIxNDQ5OTY5NjY1.Dkmv6Q._U2fnwf2EOmr2smh75bYxC012x0");
