const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let result = await lib.discord.users['@0.1.1'].me.status.update({
  activity_name: `the Universe`, // The custom status!
  activity_type: 'WATCHING', // What it is doing.
  status: 'ONLINE', // Change this to DND or IDLE.
});
