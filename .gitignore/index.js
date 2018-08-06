const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("Ready !", function() {
    bot.user.setGame("[GamerBot] w!help",type, 0);
    console.log("Bot Ready !");
});

bot.login("NDc1OTY3ODIwNzU3MzM2MDc2.DkmvJQ.LkzAIUjgCLSb3yA4-gwRbnpxg1s");
