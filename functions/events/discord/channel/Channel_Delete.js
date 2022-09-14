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
    title: 'Channel Deleted',
    description: `
**Name:** \`${context.params.event.name}\`
**Category:** **<#${context.params.event.parent_id}>**
**Topic:** \`${context.params.event.topic}\`
**isNSFW:** \`${context.params.event.nsfw ? 'Yes' : 'No'}\`
**Deleted At:** ${dateText}`,
    color: 0xaec763,
    thumbnail: {},
    footer: {
      text: `  
    Check Audit Log for more specifications`,
    },
  },
});
