const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  name: "muslim",
  aliases: ["islamic video", "ইসলামিক ভিডিও", "video"],
  description: "একটি ইসলামিক ভিডিও সরাসরি পাঠায়",
  usage: "muslim",
  cooldown: 5,
  permissions: [],
  credits: "Nahidul Islam Naim",
  prefix: true,
  category: "Muslim",

  execute: async function ({ message, api }) {
    const videoLinks = [
      "https://i.imgur.com/wBCueO9.mp4",
      "https://i.imgur.com/gebrbda.mp4",
      "https://i.imgur.com/wSFNggJ.mp4",
      "https://i.imgur.com/3yMWmFJ.mp4",
      "https://i.imgur.com/vXP90gV.mp4",
      "https://i.imgur.com/yDrXkJK.mp4",
      "https://i.imgur.com/wlKg3nI.mp4",
      "https://i.imgur.com/wgHmxyV.mp4",
      "https://i.imgur.com/rjUfspJ.mp4",
      "https://i.imgur.com/dyJIRFw.mp4",
      "https://i.imgur.com/LIP6J8D.mp4",
      "https://i.imgur.com/hLu0wqP.mp4",
      "https://i.imgur.com/6aBSMlK.mp4"
    ];

    const randomIndex = Math.floor(Math.random() * videoLinks.length);
    const videoUrl = videoLinks[randomIndex];

    const fileName = `muslim_${Date.now()}.mp4`;
    const filePath = path.join(__dirname, "..", "cache", fileName);

    try {
      const response = await axios({
        method: "GET",
        url: videoUrl,
        responseType: "stream"
      });

      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      writer.on("finish", () => {
        api.sendMessage({
          body: "☪️ ইসলামেই সুখ, ইসলামের শান্তি 🌙\n\n📿 নিচে একটি ইসলামিক ভিডিও 👇",
          attachment: fs.createReadStream(filePath)
        }, message.threadID, () => {
          fs.unlinkSync(filePath);
        }, message.messageID);
      });

      writer.on("error", err => {
        console.error("File write error:", err);
        api.sendMessage("❌ ভিডিও পাঠাতে সমস্যা হয়েছে!", message.threadID, message.messageID);
      });

    } catch (err) {
      console.error("Axios error:", err);
      api.sendMessage("❌ ভিডিও লোড করতে পারিনি!", message.threadID, message.messageID);
    }
  }
};
