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
    title: 'Thread Member Removed',
    description: `
**Member Count:** \`${context.params.event.member_count}\`
**Removed At: ** ${dateText}`,
    color: 0x2f8f52,
    thumbnail: {},
    footer: {
      text: `  
    Check Audit Log for more specifications`,
    },
  },
});
