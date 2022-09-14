const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": `<@&724993544653373538>`,
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 5,
          "label": `AniList Page`,
          "url": `https://anilist.co/anime/101610/Bokura-no-Nanokakan-Sensou/`,
          "disabled": false,
          "emoji": {
            "id": `1017974613264834580`,
            "name": `IconAniList`,
            "animated": false
          },
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `✦ | Title: Seven Days War`,
      "description": `⠀\n**✦ | Date:** Friday, September 16th 2022 \n**✦ | Time:** 23:45 CEST | 17:45 EST\n\n\n**✦ | Synopsis:**\nThe mystery story and social satire begins on the day before summer vacation, when every boy in a first - year class of a downtown Tokyo middle school disappears.\nWas it some accident? A mass kidnapping? Actually, the boys holed themselves up in an abandoned factory on the riverbed. With support from the schoolgirls, the boys start a revolution against the adults from this \"liberation zone.\"\n\n\n**System☆Notes:** Reviews are decent. It seems it was very popular in 2019.\n⠀`,
      "color": 0xfeadcc,
      "image": {
        "url": `https://www.animeclick.it/prove/img_tmp/88330.jpg`,
        "height": 0,
        "width": 0
      }
    }
  ]
});