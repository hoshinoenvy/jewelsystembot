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
    title: 'Invite Created',
    description: `
**Inviter:** <@${context.params.event.inviter.id}>
**Discriminator:** \`#${context.params.event.inviter.discriminator}\`
**Channel:** \`${context.params.event.channel_id}\`
**Max Duration:** \`${context.params.event.max_age}s\`
**Max Uses:** \`${context.params.event.max_uses}\`
**Temporary:** \`${context.params.event.temporary ? 'Yes' : 'No'}\`
**Created At: ** ${dateText}`,
    color: 0x00baff,
    thumbnail: {},
    footer: {
      text: `  
    Check Audit Log for more specifications`,
    },
  },
});
