const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;

const roleIds = new Set([
  '761318904097144895',
]);

const userHasRole = event.member.roles.some(r => roleIds.has(r));


if (userHasRole) {
  let result = await lib.discord.guilds['@0.2.4'].members.roles.destroy({
    role_id: `761318904097144895`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`
  });
} else {
  let result = await lib.discord.guilds['@0.2.4'].members.roles.update({
    role_id: `761318904097144895`,
    user_id: `${context.params.event.member.user.id}`,
    guild_id: `${context.params.event.guild_id}`
  });
}