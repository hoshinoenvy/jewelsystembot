// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.member.permission_names.includes('ADMINISTRATOR')) { 
let logChannel = await lib.utils.kv['@0.1.16'].get({
  key: `logging_channel_${context.params.event.guild_id}`,
  defaultValue: `None`
});

if (`${logChannel}`.match(`None`)) {
await lib.discord.interactions['@0.0.0'].followups.ephemeral.create({
  token: `${context.params.event.token}`,
  content: '',
  embeds: [{
    title: `Logging Channel Reset Aborted`,
    description: `No need to do this! Your server doesn't even have a logging channel setup yet! To set one up, use \`/setup-log-channel\`. All logging messages will then be sent there.`,
    color: 0x00aa00
  }]
});
} else {
  await lib.utils.kv['@0.1.16'].clear({
    key:`logging_channel_${context.params.event.guild_id}`,
  });
  await lib.discord.interactions['@0.0.0'].followups.ephemeral.create({
    token: `${context.params.event.token}`,
    content: '',
    embeds: [{
      title: `Logging Channel Cleared`,
      description: `You have successfully cleared your logging channel for this server! To set another one up, use \`/setup-log-channel\`. All logging messages will then be sent there.`,
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