const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.commands['@0.0.0'].create({
  "guild_id": `${process.env.GUILD_ID}`,
  "name": "setup-log-channel",
  "description": "Setup you server's logging channel! All logging messages will be sent there!",
  "options": [
    {
      "type": 7,
      "name": "channel",
      "description": "The channel you want to set as your logging channel",
      "required": true
    }
  ]
});

await lib.discord.commands['@0.0.0'].create({
  "guild_id": `${process.env.GUILD_ID}`,
  "name": "reset-log-channel",
  "description": "Resets your servers logging channel!",
  "options": []
});

await lib.discord.commands['@0.0.0'].create({
  "guild_id": `${process.env.GUILD_ID}`,
  "name": "color-code",
  "description": "Returns the color code for the logging messages.",
  "options": []
});


await lib.discord.commands['@0.0.0'].create({
  "guild_id": `${process.env.GUILD_ID}`,
  "name": "timezones",
  "description": "Displays a chart with a tutorial on how to convert to different timezones from UTC",
  "options": []
});

await lib.discord.commands['@0.0.0'].create({
  "name": "setup-log-channel",
  "description": "Setup you server's logging channel! All logging messages will be sent there!",
  "options": [
    {
      "type": 7,
      "name": "channel",
      "description": "The channel you want to set as your logging channel",
      "required": true
    }
  ]
});

await lib.discord.commands['@0.0.0'].create({
  "name": "reset-log-channel",
  "description": "Resets your servers logging channel!",
  "options": []
});

await lib.discord.commands['@0.0.0'].create({
  "name": "color-code",
  "description": "Returns the color code for the logging messages.",
  "options": []
});


await lib.discord.commands['@0.0.0'].create({
  "name": "timezones",
  "description": "Displays a chart with a tutorial on how to convert to different timezones from UTC",
  "options": []
});