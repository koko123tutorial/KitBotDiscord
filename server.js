//const data\/
const Discord = require('discord.js') 
const client = new Discord.Client()

//online console
client.on("ready", () => {
    console.log('ready')
    client.user.setPresence({ activity: {name: "bot kit"}, status: "online" })
})
//const prefix
const prefix = "t"
//prefix working
client.on("message", message => {
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let msg = message.content.toLocaleLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLocaleLowerCase();

    if(!message.content.startsWith(prefix)) return undefined;
    message.prefix = prefix;

    if(!msg.startsWith(prefix)) return;

    try {
        let commandFile = require(`./cmd/${cmd}.js`);
        commandFile.run(client, message, args);
    } catch(e) {
        
    } finally {
        console.log(`${message.author.username} Memakai cmd: ${cmd}`)
    }
})

client.login('token')