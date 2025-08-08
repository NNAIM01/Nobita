/** attitude video command by Nahidul Islam Naim **/
module.exports.config = {
  name: "nobita",
  version: "1.0.0",
  permission: 0,
  credits: "Nahidul Islam Naim",
  description: "Random Islamic video sender",
  prefix: true,
  category: "Attitude",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": ""
  }
};

const axios = require("axios");
const fs = require("fs-extra");

module.exports.run = async ({ api, event }) => {
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
  const pathVideo = __dirname + "/cache/muslim.mp4";

  try {
    const res = await axios({
      method: "GET",
      url: videoURL,
      responseType: "stream"
    });

    res.data.pipe(fs.createWriteStream(pathVideo)).on("close", () => {
      api.sendMessage({
        body: "👿 নাইম এর দুর্বলতা নাই\n\n☠️👿 নাইম মানেই attitude king 👑",
        attachment: fs.createReadStream(pathVideo)
      }, event.threadID, () => fs.unlinkSync(pathVideo), event.messageID);
    });

  } catch (error) {
    console.error(error);
    api.sendMessage("❌ ভিডিও লোড করা যাচ্ছে না!", event.threadID, event.messageID);
  }
};
