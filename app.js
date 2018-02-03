const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();

Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);

    bot.user.setPresence({ game: { name: "-play (<url>|<search string>) | Associated with ProjectAce" , type: 0 } });
    
});

music(Bot, {
	prefix: '-',        // Prefix of '-'.
	global: false,      // Server-specific queues.
	maxQueueSize: 10,   // Maximum queue size of 10.
	clearInvoker: true, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
    channel: 'music'    // Name of voice channel to join. If omitted, will instead join user's voice channel.
});
client.login(process.env.BOT_TOKEN);
