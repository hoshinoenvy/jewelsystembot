const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;

const roleIds = new Set([
  '808333560662327316',
  '990800786646777896',
  '990800870117605426',
  '724993544657305703',
]);

const userHasRole = event.member.roles.some(r => roleIds.has(r));

if (context.params.event.data.values.includes('serverrule_agree')){
  await lib.discord.guilds['@0.2.0'].members.roles.update({
      role_id: `808333560662327316`, 
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`,
    });
  }


if (context.params.event.data.values.includes('serverrule_disagree')){
  if (userHasRole) {
    await lib.discord.interactions['@1.0.1'].responses.ephemeral.create({
      token: `${context.params.event.token}`,
      content: `Careful with that. You wouldn't want to be thrown into the void now, would you?`,
      response_type: 'CHANNEL_MESSAGE_WITH_SOURCE'
    });
  } else {
    await lib.discord.guilds['@0.2.4'].members.destroy({
      user_id: `${context.params.event.member.user.id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
}

await lib.discord.channels['@0.1.1'].messages.update({
  message_id: context.params.event.message.id,
  channel_id: context.params.event.message.channel_id,
  content: context.params.event.message.content,
  embeds: context.params.event.message.embeds,
  components: context.params.event.message.components,
});
