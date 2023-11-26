const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://vajirabot1:vajirabot1@cluster0.j0d7xng.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'parolly99@gmail.com'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Nigeria'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2348145317097'
global.devs = '94719199757';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Bounty 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Samuel' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5RZktWRTRpd2NFakNYTUdkZzVmSmtjVjZIUFFMaG5nczVqSnplRUEycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWZ5UHh0ZjlMY1M4dzVoOFFEdkRuQnQrNGJ5UmRxalFSSDBUVDFMMkxrMD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQ0drZ0s0UlJBNGN0SEgzU2lwYk1OeWtiMVBxdnd1eTVrVEVrZVdqVlg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVdWxvTVUyd1FUdUQ1V0t1L2ZGL2N3ZUhjUnlLckVDNURyaEFRUmozV24wPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NVFBkenVTVjdjbFZyb3lFclVVM2J4bDA3b0l1aTVwdHZpOFpQQnNkRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJWcy9xQVdVT1NFcXBtOW9pcWcwOHR2TGdsV1BhWGVadUdCZjd1bkhyRjA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqZGszSlNRazdtSm0vOXU3YlkwMk1MenZ1RTYwcEI4WXRzaUtYRDU2dEZJaVlRZzU1NzJPdVdlYmswRkh0TjlvbWw0ZjRUNHVBSDhBRlpHODZZRmdDZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2MSwiYWR2U2VjcmV0S2V5IjoiWW9ZYzlyTzZLaFUycWZmdXJuZFZhU0JIbi9Hck82dVovSldBcUV4Qmsrcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWmppS3h3WGNSNFd4MVFVSFJBWXEtdyIsInBob25lSWQiOiIzMGIwYmY3ZS0zMzgwLTQ3MzgtODMyMS00MzNhNDFlMjBjODkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hqUnhEanJLcjVnU0t1cU96ZEZ1MXdKMGtjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJySFU1TE0yRTdNemgreVQ1Yzdad0U1QThlTDA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNYnRuc01ERUpueWlxc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkkzT096QlBqbkpNT2QzNnRMd21aTkliNHNTMVUrazF2aGJlbVhoNlEzMDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVBUUFGbVdzSk40ZFV1a0RyNTB1R3E5V2ZPb1o5K0ZTNTlldWJWcExQcjBSaDEzSzBSeVRWemN6ZzBjV2tmY1ZVMWpiYk14VHdMWFJqUUVzNUtVZUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDYzZJdFJOb0NqY1N6elQ2S2VmUWJ0cGNIMkpiSmI3ZmNJcWcxcXFKZEhDY0xvbkhwT0YwZHZUQlJZVWxMVDZRTVBQR1ZwRWN1ZE9nZTkrbmRYYkNCZz09In0sIm1lIjp7ImlkIjoiMjM0ODE0NTMxNzA5NzoxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmx8J2amPCdmp7wnZqX8J2anfCdmqIg44OF4oSi77iPIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDUzMTcwOTc6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU056anN3VDQ1eVREbmQrclM4Sm1UU0crTEV0VlBwTmI0VzNwbDRla045TiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMDk2ODczMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBTk4ifQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
