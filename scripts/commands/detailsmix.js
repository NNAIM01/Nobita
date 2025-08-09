const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "naim",
    version: "1.1",
    author: "MD Nahidul Islam Naim",
    countDown: 2,
    role: 0,
    shortDescription: "Show Naim's info, send pics & random Islamic videos",
    longDescription: "Display your details, send your/GF's photo or random Islamic video",
    category: "info",
    guide: "naim [pic/gfpic/video]",
    prefix: true,
    cooldowns: 5,
    dependencies: {
      axios: "",
      "fs-extra": ""
    }
  },

  onStart: async function ({ message, event, api }) {
    const msg = (event.body || "").toLowerCase();
    if (
      msg.includes("pic দাও") ||
      msg.includes("pic dao") ||
      msg.includes("তোমার pic") ||
      msg.includes("tomar pic daw") ||
      msg.includes("tomar pic dao")
    ) {
      return message.send({
        body: "এই নাও আমার একটা ছবি ☠️😈",
        attachment: await global.utils.getStreamFromURL(
          "https://i.postimg.cc/02TdCRdF/Picsart-24-12-04-08-20-42-796.jpg"
        )
      });
    }

    if (
      msg === "gf pic" ||
      msg === ".gfpic" ||
      msg === "জি এফ পিক" ||
      msg === "জি এফ ছবি" ||
      msg.includes("gf pic")
    ) {
      return message.send({
        body: "",
        attachment: await global.utils.getStreamFromURL(
          "https://i.postimg.cc/0QgyWvyM/20250808-014657.jpg"
        )
      });
    }

    // ভিডিও পাঠানোর অংশ
    if (msg.includes("video") || msg.includes("ভিডিও") || msg.includes("ভিডিও")) {
      const videos = [
        "https://drive.google.com/uc?export=download&id=1K50v3gBiSrf_LgIZKgNkUe7S82svXzAJ",
        "https://drive.google.com/uc?export=download&id=1KAYwAyD9zeqWVC1sBnTiuyZMsfoInfck",
        "https://drive.google.com/uc?export=download&id=1KFGCFFEM_KQ914RToKnnb72bG2z8Y698",
        "https://drive.google.com/uc?export=download&id=1KcHHGWwWHjoqlTXPiLnZgHcy1yFc81CQ",
        "https://drive.google.com/uc?export=download&id=1Kggd3eRoREIGXN1d7NhXlppqNuKLZTt4",
        "https://drive.google.com/uc?export=download&id=1KknzOy_J2Cop-gL7Dq3r-fJxe5Z8Fst0",
        "https://drive.google.com/uc?export=download&id=1KlLyvJfPJT8qSxphLNTT_2fyXYRuSCZI",
        "https://drive.google.com/uc?export=download&id=1KqXZYrwF-ti7tjsoITuc-Lzi3aLQvEHX",
        "https://drive.google.com/uc?export=download&id=1LPa-wQyjj5OZh_R-_q4AjkOdfChkgmO-",
        "https://drive.google.com/uc?export=download&id=1KOlvnNpWQ3fIDoB0AbcyWfLc7UdrBRn8"
      ];

      const videoURL = videos[Math.floor(Math.random() * videos.length)];
      const pathVideo = __dirname + "/cache/naim_video.mp4";

      try {
        const res = await axios({
          method: "GET",
          url: videoURL,
          responseType: "stream"
        });

        await new Promise((resolve, reject) => {
          res.data
            .pipe(fs.createWriteStream(pathVideo))
            .on("finish", resolve)
            .on("error", reject);
        });

        return api.sendMessage(
          {
            body: "👿 নাইম এর দুর্বলতা নাই\n\n☠️👿 নাইম মানেই attitude king 👑",
            attachment: fs.createReadStream(pathVideo)
          },
          event.threadID,
          () => fs.unlinkSync(pathVideo),
          event.messageID
        );
      } catch (error) {
        console.error(error);
        return api.sendMessage("❌ ভিডিও লোড করা যাচ্ছে না!", event.threadID, event.messageID);
      }
    }

    // ডিটেইলস দেখানোর অংশ (ডিফল্ট)
    const details = `
═════════════════════╣
║ 👨‍💻 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 : 𝗠𝗗 𝗡𝗔𝗛𝗜𝗗𝗨𝗟 𝗜𝗦𝗟𝗔𝗠 𝗡𝗔𝗜𝗠 🔧
║ 🕋 𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡   : 𝗜𝗦𝗟𝗔𝗠 ☪️
║ 💬 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 : 𝗦𝗜𝗡𝗚𝗟𝗘 ❤️
║ 🎓 𝗢𝗖𝗖𝗨𝗣𝗔𝗧𝗜𝗢𝗡 : 𝗦𝗧𝗨𝗗𝗘𝗡𝗧 🏫
║ 📅 𝗔𝗚𝗘       : 𝟭𝟳+
╠══════════════════════════════════════════════════════╣
║ 🔗 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 :
║ 🌐 https://facebook.com/fmz.nobita.955288
╠══════════════════════════════════════════════════════╣
║ 📞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 : wa.me/+8801710498589
╠══════════════════════════════════════════════════════╣
║ ✉️ 𝗘𝗠𝗔𝗜𝗟 :
║ 📧 inobita179@gmail.com
╚══════════════════════════════════════════════════════╝
`;
    return message.send(details);
  }
};
