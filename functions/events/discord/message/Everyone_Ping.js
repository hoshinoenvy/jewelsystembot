const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let logChannel = await lib.utils.kv['@0.1.16'].get({
  key: `logging_channel_${context.params.event.guild_id}`,
  defaultValue: `None`
});
let event = context.params.event;
let messageContent = event.content;
const dateText = `<t:${Math.round(new Date().getTime() / 1000)}>`
if (context.params.event.content.includes('@everyone')) {
    await lib.discord.channels['@0.2.0'].messages.create({
      channel_id: `${logChannel}`,
      content: ``,
      tts: false,
      embed: {
        type: 'rich',
        title: 'Everyone Ping Attempt Detected',
        description: `
    **User:** <@${context.params.event.author.id}>
    **Discriminator:** \`#${context.params.event.author.discriminator}\`
    **ID:** \`${context.params.event.author.id}\`
    **Channel:** <#${context.params.event.channel_id}>
    **Content:** \`${context.params.event.content}\`
    **Message ID:** \`${context.params.event.id}\`
    **Sent at: ** ${dateText} `,
        color: 0xcf1940,
        thumbnail: {},
        footer: {
          text: `  
            Check Audit Log for more specifications`,
        },
      },
    });
  }

