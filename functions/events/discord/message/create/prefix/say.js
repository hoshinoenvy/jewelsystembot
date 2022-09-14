const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let sayCommandmessage = context.params.event.content
  .split(' ')
  .slice(1)
  .join(' ');
try {
  await lib.discord.channels['@0.2.2'].messages.destroy({
    message_id: `${context.params.event.id}`,
    channel_id: `${context.params.event.channel_id}`,
  });
  let message = await lib.discord.channels['@0.2.2'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `${sayCommandmessage}`,
  });
  await lib.discord.channels['@0.2.2'].messages.create({
    channel_id: process.env.cmd_channel_id,
    content: ``,
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `Say Command CMD`,
        description: `User: ${context.params.event.author.username}\nMessage: ${sayCommandmessage}\nChannel:<#${context.params.event.channel_id}>`,
        color: 0xffffff,
        url: `https://discord.com/channels/${context.params.event.guild_id}/${message.channel_id}/${message.id}`,
      },
    ],
  });
} catch (e) {
  await lib.discord.users['@0.1.6'].dms.create({
    recipient_id: `${context.params.event.author.id}`,
    content: `Failed!\nPlease run again the command!`,
  });
}
