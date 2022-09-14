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
    title: 'I Was Mentioned',
    description: `
**User:** <@${context.params.event.author.id}>
**Discriminator:** \`#${context.params.event.author.discriminator}\`
**ID:** \`${context.params.event.author.id}\`
**Channel:** <#${context.params.event.channel_id}>
**Time:** ${dateText}`,
    color: 0xf3eded,
    thumbnail: {},
    footer: {
      text: `  
        Check Audit Log for more specifications`,
    },
  },
});
