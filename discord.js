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

client.on('message', message => {
    if(message.content.startsWith === '!ban') {
        const user = message.mentions.users.first();
        if(user) {
            const member = message.guild.member(user);
            if(member) {
                member.ban(7)
                    .then(() => console.log(`Banned ${member.displayName}`), message.reply(`Successfully banned ${member.displayName}.`))
                    .catch(err => { message.reply(`That user isn't in this server!`) })
            }
        } else {
            message.reply(`You didn't specify a member!`)
        }
    }
})


client.login('NjE4MDA1MzE4ODYwODAwMDIw.XW2E1g.AjM8IB9eLY_WWPv1YgtbTJfEMaw');