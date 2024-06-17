const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="nanadwira52@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233506087430";




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  //SUHAIL_03_47_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICA4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMCxcbiAgICAgICAgODksXG4gICAgICAgIDg5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVFeDE1ZVRqOS8xQThRVUZnQ3VmREwxUkIvd1hHMFhxSUtITHNhczFrR1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlAtN09ZeFFDUl9TTXJ1WTRZUS12eHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmY1NTYzZmItZjBiMi00ZjhkLTg0MTMtMjA5NjY2MTZjM2RmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMjA4LFxuICAgICAgNSxcbiAgICAgIDY4LFxuICAgICAgMTYxLFxuICAgICAgMjQsXG4gICAgICAxODgsXG4gICAgICAxODQsXG4gICAgICAyMzUsXG4gICAgICA0MyxcbiAgICAgIDMzLFxuICAgICAgMjIsXG4gICAgICAxNTYsXG4gICAgICA3MSxcbiAgICAgIDI5LFxuICAgICAgMTEyLFxuICAgICAgOTEsXG4gICAgICAzNCxcbiAgICAgIDgzLFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMTE3LFxuICAgICAgMTM5LFxuICAgICAgMTE5LFxuICAgICAgMjM4LFxuICAgICAgNzMsXG4gICAgICAyMzcsXG4gICAgICA1MyxcbiAgICAgIDk3LFxuICAgICAgMTM0LFxuICAgICAgMTY4LFxuICAgICAgNzEsXG4gICAgICAyMDIsXG4gICAgICAyNTAsXG4gICAgICAxMTksXG4gICAgICAxMDgsXG4gICAgICA5OSxcbiAgICAgIDUyLFxuICAgICAgMTkzLFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTREOTIxWUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUwNjA4NzQzMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwia29qb1wiLFxuICAgIFwibGlkXCI6IFwiMTI3OTg2MTQ5ODk2MzUzOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUENvN2VNR0VMWGp2ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJleXM3eVZEdkdib0d6VmptMWFXTGNQOGI3Ymt2MHduQXVtRnlmck4vazFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRXc2pwTnc2eDJLOXpZUG1VTWtwTEtJMGxJelhZTk9xODlMY2hyYjJtMnZuSkhBTVJsQUpqNk0vOWpjNHJDbGpJNVdXQUlybFhGMm4xUHAxdnp1TURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm96QmhHSURhMk5TanRtZUJ4a1VHZ1ZUTXVkTG5ZNzB4RTdwR0d2N2Z0UWlmYWN1OHFCYzd2elE0VDBkSTJ0NGdERUlwZ2Ftb1ZHVDZwYnRUM2J0MkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUwNjA4NzQzMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg1OTYwMjRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9 PUT your SESSION_ID 


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
