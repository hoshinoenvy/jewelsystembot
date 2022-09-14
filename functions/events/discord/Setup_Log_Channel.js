const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.member.permission_names.includes('ADMINISTRATOR')) { 
let LogChannel = context.params.event.data.options[0].value
let logChannel = await lib.utils.kv['@0.1.16'].get({
  key: `logging_channel_${context.params.event.guild_id}`,
  defaultValue: `None`
});

if (`${logChannel}`.match(`None`)) {
  let logChannel = await lib.utils.kv['@0.1.16'].set({
    key: `logging_channel_${context.params.event.guild_id}`,
    value: `${LogChannel}`
  });
  
  await lib.discord.interactions['@0.0.0'].followups.ephemeral.create({
    token: `${context.params.event.token}`,
    content: '',
    embeds: [{
      title: `Logging Channel Setup Successful`,
      description: `Your server's logging channel is now <#${LogChannel}>. All logging messages will be sent there.`,
      color: 0x00aa00
    }]
  });
} else {
  await lib.discord.interactions['@0.0.0'].followups.ephemeral.create({
    token: `${context.params.event.token}`,
    content: '',
    embeds: [{
      title: `Logging Channel Setup Aborted`,
      description: `Your server already has a logging channel: <#${logChannel}>. All logging messages will be sent there.`,
      color: 0x00aa00
    }]
  });
}
} else {
  await lib.discord.interactions['@0.0.0'].followups.ephemeral.create({
    token: `${context.params.event.token}`,
    content: '',
    embeds: [{
      title: `Missing Permissions`,
      description: `Sorry! You don't have the required permissions to use this command!`,
      color: 0x00aa00
    }]
  });
}