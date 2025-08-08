module.exports = {
  config: {
    name: "nobita2",
    version: "1.3",
    author: "Naim Hossen",
    countDown: 2,
    role: 0,
    shortDescription: "Show Naim's details and send pics on request",
    longDescription: "Shows full profile and sends your or GF's picture on demand",
    category: "info",
    guide: ".nobita2",
    prefix: true,
  },

  onStart: async function ({ message, event }) {
    const msg = (event.body || "").toLowerCase();

    if (
      msg.includes("pic দাও") ||
      msg.includes("pic dao") ||
      msg.includes("তোমার pic") ||
      msg.includes("tomar pic daw") ||
      msg.includes("tomar pic dao")
    ) {
      return message.send({
        body: "এই নাও আমার একটা ছবি 😄",
        attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/02TdCRdF/Picsart-24-12-04-08-20-42-796.jpg")
      });
    }

    if (msg === "gf pic" || msg === ".gfpic" || msg === "জি এফ পিক" || msg === "জি এফ ছবি") {
      return message.send({
        body: "এই হলো আমার GF এর ছবি 😊",
        attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/0QgyWvyM/20250808-014657.jpg")
      });
    }

    const details = `
═════════════════════╣
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

    return message.send(details);
  }
};
