const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    react: "👸",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(robin, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await robin.sendPresenceUpdate('recording', from);
await robin.sendMessage(from, { audio: { url:"https://github.com/MR-Kavishka/QUEEN-TESA-DATA/raw/refs/heads/main/autovoice/AUD-20250205-WA0005..mp3" }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
    
const config = await readEnv();
return await robin.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

