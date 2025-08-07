/** Islamic video command by Nahidul Islam Naim **/
module.exports.config = {
  name: "muslim",
  version: "1.0.0",
  permission: 0,
  credits: "Nahidul Islam Naim",
  description: "Random Islamic video sender",
  prefix: true,
  category: "Muslim",
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
    "https://drive.google.com/uc?export=download&id=1K50v3gBiSrf_LgIZKgNkUe7S82svXzAJ"
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
        body: "🌙 ইসলামিক ভিডিও নিচে দেওয়া হলো\n\n☪️ ইসলামই শান্তি 📿",
        attachment: fs.createReadStream(pathVideo)
      }, event.threadID, () => fs.unlinkSync(pathVideo), event.messageID);
    });

  } catch (error) {
    console.error(error);
    api.sendMessage("❌ ভিডিও লোড করা যাচ্ছে না!", event.threadID, event.messageID);
  }
};
