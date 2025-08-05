module.exports.config = {
  name: "join",
  eventType: ['log:subscribe'],
  version: "1.0.0",
  credits: "Mirai-Team", // FIXED BY YAN Nayan
  description: "GROUP UPDATE NOTIFICATION"
};

const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const request = require('request');
//const { join } = require('path');
const axios = require('axios');
const jimp = require("jimp")
const fontlink = 'https://drive.google.com/u/0/uc?id=10XFWm9F6u2RKnuVIfwoEdlav2HhkAUIB&export=download'
let PRFX = `${global.config.PREFIX}`;

module.exports.circle = async (image) => {
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

let suffix;

module.exports.run = async function({ api, event, Users }) {
  var fullYear = global.client.getTime("fullYear");
  var getHours = await global.client.getTime("hours");
  var session = `${getHours < 3 ? "midnight" : getHours < 8 ? "Early morning" : getHours < 12 ? "noon" : getHours < 17 ? "afternoon" : getHours < 23 ? "evening" : "midnight"}`
  const moment = require("moment-timezone");
  var thu = moment.tz('Asia/dhaka').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  const time = moment.tz("Asia/dhaka").format("HH:mm:ss - DD/MM/YYYY");
  const hours = moment.tz("Asia/dhaka").format("HH");
  const { commands } = global.client;
  const { threadID } = event;
  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  if (!event.logMessageData.addedParticipants || !Array.isArray(event.logMessageData.addedParticipants)) {
    return;
  }
  if (event.logMessageData.addedParticipants && Array.isArray(event.logMessageData.addedParticipants) && event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    //api.changeNickname(`𝗕𝗢𝗧 ${(!global.config.BOTNAME) ? "Buddy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());

    let gifUrl = 'https://i.postimg.cc/dtD0kVBX/NAYEM-BOT-FOR-UPLOAD.gif';
let gifPath = __dirname + '/Nayan/join/join.gif';

axios.get(gifUrl, { responseType: 'arraybuffer' })
.then(response => {
    fs.writeFileSync(gifPath, response.data);
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ➠${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage("চলে এসেছি আমি পিচ্চি নাঈম তোমাদের মাঝে🤭𝘂𝗺𝗺𝗮𝗵 𝗱𝗮𝘄🤭!", event.threadID, () => api.sendMessage({ body: `${global.config.BOTNAME} CONNECTED«\n\nA𝙨𝙨𝙖𝙡𝙖𝙢𝙪 𝘼𝙡𝙖𝙞𝙠𝙪𝙢 𝘽𝙧𝙤𝙩𝙝𝙚𝙧𝙨 & 𝙎𝙞𝙨𝙩𝙚𝙧𝙨 ☘️
╔══════════════════════════════════════════════════════╗
║ 🕋 𝘼𝙨𝙨𝙖𝙡𝙖𝙢𝙪 𝘼𝙡𝙖𝙞𝙠𝙪𝙢 𝘽𝙧𝙤𝙩𝙝𝙚𝙧𝙨 & 𝙎𝙞𝙨𝙩𝙚𝙧𝙨 ☪️🕌         ║
╠══════════════════════════════════════════════════════╣
║ 🕋 𝗞𝗮𝗹𝗶𝗺𝗮 𝗧𝗮𝘆𝘆𝗶𝗯𝗮 (কালিমা তাইয়্যিবা) ✨              ║
║ 💚 𝗟𝗔𝗔 𝗜𝗟𝗔𝗛𝗔 𝗜𝗟𝗟𝗔𝗟𝗟𝗔𝗛 𝗠𝗨𝗛𝗔𝗠𝗠𝗔𝗗𝗨𝗥 𝗥𝗔𝗦𝗨𝗟𝗨𝗟𝗟𝗔𝗛 💚                               ║
║ 📖 অর্থ (বাংলায়):  “আল্লাহ ছাড়া কোনো উপাস্য নেই,                    
║ মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম) আল্লাহর রাসূল🌺      
║ 🕋 لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ 🕋   ║
╠══════════════════════════════════════════════════════╣
║ 🕌 𝗦𝗨𝗥𝗔𝗛 𝗜𝗞𝗛𝗟𝗔𝗦 (সূরা ইখলাস) 🌙                        ║
║                                                      ║
║ ﷽                                                   ║
║ 𝗤𝗨𝗟 𝗛𝗨𝗪𝗔𝗟𝗟𝗔𝗛𝗨 𝗔𝗛𝗔𝗗𝗨𝗡 ▪️ বল, তিনিই আল্লাহ, এক ও অদ্বিতীয়║
║ 𝗔𝗟𝗟𝗔𝗛𝗨𝗦 𝗦𝗔𝗠𝗔𝗗𝗨𝗡 ▪️ আল্লাহ অমুখাপেক্ষী                   ║
║ 𝗟𝗔𝗠 𝗬𝗔𝗟𝗜𝗗 𝗪𝗔 𝗟𝗔𝗠 𝗬𝗢𝗢𝗟𝗔𝗗 ▪️ তিনি জন্ম দেননি, জন্মগ্রহণও করেননি║
║ 𝗪𝗔 𝗟𝗔𝗠 𝗬𝗔𝗞𝗨𝗡 𝗟𝗔𝗛𝗨 𝗞𝗨𝗙𝗨𝗪𝗔𝗡 𝗔𝗛𝗔𝗗 ▪️ তাঁর সমতুল্য কেউ নেই║
╠══════════════════════════════════════════════════════╣
║ 👨‍💻 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 : 𝗠𝗗 𝗡𝗔𝗛𝗜𝗗𝗨𝗟 𝗜𝗦𝗟𝗔𝗠 𝗡𝗔𝗜𝗠 🔧              
║ 🕋 𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡   : 𝗜𝗦𝗟𝗔𝗠 ☪️                               ║
║ 💬 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 : 𝗦𝗜𝗡𝗚𝗟𝗘 ❤️                          ║
║ 🎓 𝗢𝗖𝗖𝗨𝗣𝗔𝗧𝗜𝗢𝗡 : 𝗦𝗧𝗨𝗗𝗘𝗡𝗧 🏫                          ║
║ 📅 𝗔𝗚𝗘       : 𝟭𝟳+                                     ║
╠══════════════════════════════════════════════════════╣
║ 🔗 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 :                                        ║
║ 🌐 https://facebook.com/fmz.nobita.955288             ║
╠══════════════════════════════════════════════════════╣
║ 📞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 : wa.me/+8801710498589                    ║
╠══════════════════════════════════════════════════════╣
║ ✉️ 𝗘𝗠𝗔𝗜𝗟 :                                            ║
║ 📧 inobita179@gmail.com                               ║
╠══════════════════════════════════════════════════════╣
║ 🕊️ 𝗠𝗔𝗬 𝗔𝗟𝗟𝗔𝗛 𝗚𝗨𝗜𝗗𝗘 𝗨𝗦 𝗧𝗢 𝗧𝗛𝗘 𝗥𝗜𝗚𝗛𝗧 𝗣𝗔𝗧𝗛 🤲             ║
╚══════════════════════════════════════════════════════╝

`, attachment: fs.createReadStream(gifPath)}, threadID));
  }})
.catch(error => {
    console.error(error);
});
  }
  else {
    try {
      if (!fs.existsSync(__dirname + `/Nayan/font/Semi.ttf`)) {
        let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/Nayan/font/Semi.ttf`, Buffer.from(getfont, "utf-8"));
      };
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      var abx = [];
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      // console.log(event.logMessageData.addedParticipants)
      var id = [];
      for (let o = 0; o < event.logMessageData.addedParticipants.length; o++) {
        let pathImg = __dirname + `/Nayan/join/${o}.png`;
        let pathAva = __dirname + `/Nayan/join/avt.png`;
        let avtAnime = (await axios.get(encodeURI(
          `https://graph.facebook.com/${event.logMessageData.addedParticipants[o].userFbId}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`), { responseType: "arraybuffer" })).data;
        var ok = [
          'https://i.imgur.com/dDSh0wc.jpeg',
          'https://i.imgur.com/UucSRWJ.jpeg',
          'https://i.imgur.com/OYzHKNE.jpeg',
          'https://i.imgur.com/V5L9dPi.jpeg',
          'https://i.imgur.com/M7HEAMA.jpeg'
        ]
        let background = await new Promise((resolve, reject) => {
          request.get(
            encodeURI(`${ok[Math.floor(Math.random() * ok.length)]}`),
            { encoding: null },
            (error, response, body) => {
              if (error) {
                reject(error);
              } else {
                resolve(body);
              }
            }
          );
        });
        fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
        fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
        var avatar = await this.circle(pathAva);
        let baseImage = await loadImage(pathImg);
        let baseAva = await loadImage(avatar);
        registerFont(__dirname + `/Nayan/font/Semi.ttf`, {
          family: "Semi"
        });
        let canvas = createCanvas(1902, 1082);
        console.log(canvas.width, canvas.height)
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseAva, canvas.width / 2 - 188, canvas.height / 2 - 375, 375, 355);
        ctx.fillStyle = "#FFF";
        ctx.textAlign = "center";
        ctx.font = `155px Semi`;
        ctx.fillText(`${event.logMessageData.addedParticipants[o].fullName}`, canvas.width / 2 + 20, canvas.height / 2 + 100);
        ctx.save();
        ctx.font = `75px Semi`;
        ctx.fillText(`Welcome to ${threadName}`, canvas.width / 2 - 15, canvas.height / 2 + 235)
        const number = participantIDs.length - o;

        if (number === 11 || number === 12 || number === 13) {
          suffix = "th";
        } else {
          const lastDigit = number % 10;
          switch (lastDigit) {
            case 1:
              suffix = "st";
              break;
            case 2:
              suffix = "nd";
              break;
            case 3:
              suffix = "rd";
              break;
            default:
              suffix = "th";
              break;
          }
        }

        ctx.fillText(`You are the ${number}${suffix} member of this group`, canvas.width / 2 - 15, canvas.height / 2 + 350);
        ctx.restore();
        const imageBuffer = canvas.toBuffer();
        fs.writeFileSync(pathImg, imageBuffer);
        abx.push(fs.createReadStream(__dirname + `/Nayan/join/${o}.png`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = `🕌 السلام عليكم ورحمة الله وبركاته
🌸 *Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh* 🌿
💐 ফ্যাঁমেঁলিঁ গ্রুঁপেঁরঁ প্ঁক্ষঁ থে্ঁকে্ঁ আঁপঁনাঁকেঁ জা্ঁনা্ঁইঁ হা্ঁজা্ঁর্ঁ হা্ঁজা্ঁর্ঁ ও্ লা্ঁল্ঁ গো্ঁলা্ঁপে্ঁর্ঁ শু্ঁভে্ঁচ্ছা্ঁ 🌹🥀

🤍 {name}, আমাদের গ্রুপ {threadName}-এ আপনাকে আন্তরিকভাবে স্বাগত জানাচ্ছি!

🌸 আ্ঁশা্ঁ ক্ঁরি্ঁ আ্ঁপ্ঁনি̐ আ্ঁপ্ঁনা̐র̐ মু্ঁল্য্ঁবা্ঁন̐ স্ঁম্ঁয়̐ আ্ঁমা̐দে̐র̐ উ̐প্ঁহা̐র̐ দি̐বেন̐ ✨

❁❁❁❁ আ̐মা̐দে̐র̐ ☆⋆⃝➠̶̶̶̶̶̶᭄🌹 গু্ঁরু̐প্ঁটা̐ এ্ঁগি̐য়ে̐ নি̐য়ে̐ যা̐ও̐য়া̐র̐ জ̐ন্য̐ স্ঁহ̐যো̐গিতা̐ ক̐র̐বেন̐ ✾✾❀

━━━━━━━━━━━━━━━
🔖 সদস্য নং: {soThanhVien} 
🗓️ তারিখ: {time}
📅 দিন: {thu}
🕰️ সময়: {buoi}
━━━━━━━━━━━━━━━

💖 🤍🌸ভাঁলোঁবাঁসাঁ অঁবিঁরাঁমঁ🌸💗
— 🌸.NAHIDUL.🌺
` : msg = threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author)
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'You' : 'You')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{uidAuthor}/g, event.author)
        .replace(/\{buoi}/g, session)
        .replace(/\{time}/g, time)
        .replace(/\{thu}/g, thu);

      var formPush = { body: msg, attachment: abx, mentions }
      api.sendMessage(formPush, threadID);
      for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/Nayan/join/${ii}.png`)
      }
    } catch (e) { return console.log(e) };
  }
                         }
