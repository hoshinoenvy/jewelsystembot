const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let logChannel = await lib.utils.kv['@0.1.16'].get({
  key: `logging_channel_${context.params.event.guild_id}`,
  defaultValue: `None`
});

const dateText = `<t:${Math.round(new Date().getTime() / 1000)}>`
await lib.discord.channels['@0.2.0'].messages.create({
  channel_id: `${logChannel}`,
  content: ``,
  tts: false,
  embed: {
    type: 'rich',
    title: 'User Was Banned',
    description: `
**Username:** \`${context.params.event.user.username}\`
**Discriminator:** \`#${context.params.event.user.discriminator}\`
**ID:** \`${context.params.event.user.id}\`
**isBot:** \`${context.params.event.user.bot ? 'Yes' : 'No'}\`
**Time: ** ${dateText}`,
    color: 0x006F5191,
    thumbnail: {},
    footer: {
      text: `  
  Check Audit Log for more specifications`,
    },
  },
});
