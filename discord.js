const {Client, RichEmbed} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}!`)
})

client.on('message', message => {
    if(message.content === '!app') {
        const embed = new RichEmbed()
            .setTitle('Savvy Officer Application')
            .setDescription('Officer Application for Savvy guild, located on Thunderfury - Alliance')
            .setURL('https://forms.gle/5bssKEJqf5wRPNEw8')
        message.channel.send(embed)
    }
})

client.login('NjE4MDA1MzE4ODYwODAwMDIw.XWzdKA.MQmHZ9p2xRRmrOcGJhsFyDL2LFQ');