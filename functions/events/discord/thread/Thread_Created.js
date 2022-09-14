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
    title: 'Thread Created',
    description: `
**Channel:** <#${context.params.event.parent_id}>
**Name:** \`${context.params.event.name}\`
**Creator:** <@${context.params.event.owner_id}>
**Auto-Archive:** \`${context.params.event.thread_metadata.auto_archive_duration}min\`
**Created At: ** ${dateText} `,
    color: 0x2f8f52,
    thumbnail: {},
    footer: {
      text: `  
    Check Audit Log for more specifications`,
    },
  },
});
