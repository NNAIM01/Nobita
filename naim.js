module.exports = {
  config: {
    name: "naim",
    version: "1.4",
    author: "Naim Hossen",
    countDown: 3,
    role: 0,
    shortDescription: "my details",
    longDescription: "Shows full profile info of Naim with his picture",
    category: "info",
    usages: "naim",
    prefix:true,
  },

  onStart: async function ({ message }) {
    const details = `
═══════════════════════════════════════════════════════╣
║ 👨‍💻 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 : 𝗠𝗗 𝗡𝗔𝗛𝗜𝗗𝗨𝗟 𝗜𝗦𝗟𝗔𝗠 𝗡𝗔𝗜𝗠 🔧
║ 🕋 𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡   : 𝗜𝗦𝗟𝗔𝗠 ☪️
║ 💬 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 : 𝗦𝗜𝗡𝗚𝗟𝗘 ❤️
║ 🎓 𝗢𝗖𝗖𝗨𝗣𝗔𝗧𝗜𝗢𝗡 : 𝗦𝗧𝗨𝗗𝗘𝗡𝗧 🏫
║ 📅 𝗔𝗚𝗘       : 𝟭𝟳+
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

    const imgURL = "https://i.postimg.cc/02TdCRdF/Picsart-24-12-04-08-20-42-796.jpg";

    return message.send({
      body: details,
      attachment: await global.utils.getStreamFromURL(imgURL)
    });
  }
};
