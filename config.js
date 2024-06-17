const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233256646504";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUSUHAIL_00_45_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NixcbiAgICAgICAgMTAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTczLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNpVyt4cThDNWlValgxR0RIWmtzdFlUbTgxRFBaRGNPeGw1N3FrMWhiVXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjYwUi1KOXpMUlhtR3haRHJQTlVJbkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTQyYTMxNGQtYjZmOS00MDU1LTgxNjgtMTk2NmViZjUwYWZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDE3NixcbiAgICAgIDI0OCxcbiAgICAgIDE0OCxcbiAgICAgIDg3LFxuICAgICAgMTg3LFxuICAgICAgMjAsXG4gICAgICAyMDIsXG4gICAgICA2MyxcbiAgICAgIDY2LFxuICAgICAgNjQsXG4gICAgICAxNzIsXG4gICAgICAzMixcbiAgICAgIDk3LFxuICAgICAgMjI4LFxuICAgICAgMTA1LFxuICAgICAgMzIsXG4gICAgICAxNjUsXG4gICAgICAxNzIsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgNTgsXG4gICAgICAxMzIsXG4gICAgICAxOCxcbiAgICAgIDE5NixcbiAgICAgIDEyNCxcbiAgICAgIDE5OCxcbiAgICAgIDI1MSxcbiAgICAgIDE2MSxcbiAgICAgIDE1NyxcbiAgICAgIDEwLFxuICAgICAgMTEwLFxuICAgICAgMTQ3LFxuICAgICAgMTEyLFxuICAgICAgMjQ4LFxuICAgICAgNjEsXG4gICAgICAzMyxcbiAgICAgIDE2OCxcbiAgICAgIDIwMixcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko4WVc3WDNGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNTY2NDY1MDQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODA3OTMwODI4MzA4ODA6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNelM5b0FERVB1TnZyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldnNUtKK3NoWDY4SVhzT0t6MVVvUWZCQnFUUnlGRFdwdkxLU1NqZ3FtQzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMnVQKzM2RnB1OGd5cmtZTUp2aEV0STFMK2ZXNDU2MytlMGFsbEUxUFZoMk50VWhlWFRXbDdwbjhOK1R4SHJZREFVS3NHdDNNSElGOUQ3aHZENmtNQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibWg0NFUwY0ZWc1JJMGRQOENabnd6RmFZcWxmN0dHRXQ2RE10UDNuTVZoWXN5Sm5wRWc1TUZEdTdRaEtOWEtlbzBaRmpCRHFZN2QvUk5XZ2l6NHN6Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjU2NjQ2NTA0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTg1MTE4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==T your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
