const dbd = require("dbd.js")

const bot = new dbd.Bot({
  
  token: "YOUR BOT'S TOKEN",
  prefix: "$getServerVar[prefix]" 
  
  })

bot.onMessage()

------------------------------------------------------

// ping command

bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
})

------------------------------------------------------

//status 

bot.status({
  text: "your text",
  type: "PLAYING",
  time: 1
})

------------------------------------------------------

// Set prefix for server

bot.command({
name: "sprefix",
code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[**Done, my new prefix is** \`$message\`]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;$customEmoji[Rufy] **You dont have** \`ADMIN\` **perms**]`
})

------------------------------------------------------

// bot variables

bot.variables({
   prefix: "!"
  })
